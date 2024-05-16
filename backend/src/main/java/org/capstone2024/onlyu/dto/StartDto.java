package org.capstone2024.onlyu.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class StartDto {
    String email;
    String gender;
}
