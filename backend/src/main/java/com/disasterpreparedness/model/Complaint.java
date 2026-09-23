package com.disasterpreparedness.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "complaints")
public class Complaint {
    @Id
    private String complaintId;
    private String userId;
    private String category;
    private String location;
    private String description;
    private String image;
    private LocalDateTime dateTime = LocalDateTime.now();
    private String status = "UNDER_REVIEW"; // SUBMITTED, UNDER_REVIEW, ASSIGNED, IN_PROGRESS, RESOLVED, REJECTED
    private String assignedDepartment;
    private String assignedOfficer;
    private String resolutionRemarks;
    private LocalDateTime updatedAt = LocalDateTime.now();
}
