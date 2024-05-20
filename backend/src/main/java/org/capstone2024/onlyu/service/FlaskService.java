package org.capstone2024.onlyu.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.capstone2024.onlyu.dto.StartDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;


@Service
@RequiredArgsConstructor
@Slf4j
public class FlaskService {

    @Transactional
    public Map<String, Object> predict_color_flask(MultipartFile image, StartDto startDto){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        String url = "http://127.0.0.1:5050/predict_color";

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("image", image.getResource());

        ObjectMapper objectMapper = new ObjectMapper();
        String startDtoJson;
        try {
            startDtoJson = objectMapper.writeValueAsString(startDto);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        body.add("data", startDtoJson);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
        return restTemplate.postForObject(url, requestEntity, Map.class);
    }

    @Transactional
    public Map<String, Object> predict_shape_flask(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://127.0.0.1:5050/predict_shape";

        return restTemplate.getForObject(url, Map.class);
    }
}
