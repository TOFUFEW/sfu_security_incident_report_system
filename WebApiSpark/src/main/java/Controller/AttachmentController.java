package Controller;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static spark.Spark.post;

public class AttachmentController {

    public AttachmentController ()
    {
        setupEndPoints();
    }

    private void setupEndPoints() {
        post("/upload", "multipart/form-data", (request, response) -> {
            try {
                Path currentPath = Paths.get("").toAbsolutePath();

                final File upload = new File(currentPath +
                        "/src/main/resources/public/uploads"
                );
                System.out.println(upload);
                if (!upload.exists() && !upload.mkdirs()) {
                    throw new RuntimeException("Failed to create directory " + upload.getAbsolutePath());
                }

                // apache commons-fileupload to handle file upload
                DiskFileItemFactory factory = new DiskFileItemFactory();
                factory.setRepository(upload);
                ServletFileUpload fileUpload = new ServletFileUpload(factory);
                List<FileItem> items = fileUpload.parseRequest(request.raw());

                // image is the field name that we want to save
                FileItem item = items.stream()
                        .filter(e -> "files[]".equals(e.getFieldName()))
                        .findFirst().get();
                String fileName = item.getName();
                item.write(new File(upload, fileName));
                return true;
            }catch (Exception e) {
                    e.printStackTrace();
            }
            return false;
        });

    }


}
