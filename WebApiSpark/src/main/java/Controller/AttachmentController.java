package Controller;

import Util.DBHelper;
import Util.JsonUtil;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import static spark.Spark.get;
import static spark.Spark.post;

public class AttachmentController {

    public AttachmentController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post("/upload/:reportID", "multipart/form-data", ( request , response ) -> {
            try {
                System.out.println("uploading...");
                Path currentPath = Paths.get("").toAbsolutePath();

                final File upload = new File(
                        currentPath +
                        "/uploads/" +
                         request.params("reportID")
                );
                System.out.println(upload);

                if ( !upload.exists() && !upload.mkdirs() ) {
                    throw new RuntimeException("Failed to create directory " + upload.getAbsolutePath());
                }

                // apache commons-fileupload to handle file upload
                DiskFileItemFactory factory = new DiskFileItemFactory();
                factory.setRepository( upload );
                ServletFileUpload fileUpload = new ServletFileUpload( factory );
                List<FileItem> items = fileUpload.parseRequest( request.raw());

                // uploadField is the field name that we want to save
                String uploadField = "files[]";
                FileItem item = items.stream()
                        .filter(e -> uploadField.equals(e.getFieldName()))
                        .findFirst().get();
                String fileName = item.getName();
                item.write ( new File (
                        upload,
                        fileName
                ));

                return true;
            }catch ( Exception e ) {
                    e.printStackTrace();
            }
            return false;
        });

        get("upload/get/:id/:filename", (request, response) -> {
            System.out.println("get file");
            System.out.println(request.params("filename"));

            String filePath = request.params("id") + "/" + request.params("filename");

            try {
                Path currentPath = Paths.get("").toAbsolutePath();
                Path from = Paths.get(currentPath + "/uploads/" + filePath).toAbsolutePath();
                File file = new File(from.toString());

                ZipOutputStream zipOutputStream = new ZipOutputStream(new BufferedOutputStream(response.raw().getOutputStream()));
                BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));

                ZipEntry zipEntry = new ZipEntry(file.getName());

                zipOutputStream.putNextEntry(zipEntry);
                byte[] buffer = new byte[1024];
                int len;
                while ((len = bufferedInputStream.read(buffer)) > 0) {
                    zipOutputStream.write(buffer,0,len);
                }
                zipOutputStream.flush();
                zipOutputStream.close();

            } catch (Exception e) {

                e.printStackTrace();
            }
            return response.raw();
        } );

        get ( "/uploads" , ( request , response ) -> {
            return JsonUtil.toJson( DBHelper.getAttachments () );
        } );

    }


}
