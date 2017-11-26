package Controller;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

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
                List<FileItem> items = fileUpload.parseRequest( request.raw() );

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

        get("/upload/:filename", (request, response) -> {
            System.out.println(request.params("filename"));
            Path from = Paths.get("/uploads/" + request.params("filename")).toAbsolutePath();
            Path to = Paths.get("/src/main/resources/public/uploads/" + request.params("filename")).toAbsolutePath();

            Files.copy(from, to.resolve(to.getFileName()));

            return to;
        } );

    }


}
