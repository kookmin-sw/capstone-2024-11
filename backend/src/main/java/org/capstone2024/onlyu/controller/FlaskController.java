package org.capstone2024.onlyu.controller;

import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import org.capstone2024.onlyu.service.FlaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

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
    public String start(@RequestParam("email") String email, @RequestParam("gender") String gender,
                                @RequestParam("image") MultipartFile multipartFile){
        String predict_color_res = flaskService.predict_color_flask(multipartFile);
        String predict_shape_res = flaskService.predict_shape_flask();

        JsonObject obj = new JsonObject();
        obj.addProperty("predictColorRes", predict_color_res);
        obj.addProperty("predictShapeRes", predict_shape_res);
        return obj.toString();
    }

}
