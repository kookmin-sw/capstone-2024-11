package org.capstone2024.onlyu.controller;

import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import org.capstone2024.onlyu.dto.StartDto;
import org.capstone2024.onlyu.entity.PredictResult;
import org.capstone2024.onlyu.service.FlaskService;
import org.hibernate.mapping.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@Slf4j
public class FlaskController {
    private final FlaskService flaskService;
    @Autowired
    public FlaskController(FlaskService flaskService){
        this.flaskService = flaskService;
    }

    // 퍼스널 컬러 예측과 피부형 검출
    @RequestMapping(value = "/start", method = RequestMethod.POST)
    public PredictResult start(@RequestPart("data") StartDto startDto,
            @RequestPart("file") MultipartFile image){
        Map<String, Object> predict_color_res = flaskService.predict_color_flask(image);
        String predict_shape_res = flaskService.predict_shape_flask();
        return new PredictResult((Map<String, String>) predict_color_res.get("label_res"), (Map<String, List<String>>) predict_color_res.get("probability_res"), predict_shape_res);
    }

//    @RequestMapping(value = "/gan_image", method = RequestMethod.GET)
//    public String gan_image(){
        // Boolean res = flaskService.gan_image_flask();
//        JsonObject obj = new JsonObject();
//        obj.addProperty("success", res);
//        return obj.toString();
//    }

}
