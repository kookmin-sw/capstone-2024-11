package org.capstone2024.onlyu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @GetMapping("/")
    @ResponseBody
    public String test(Model model){
        // 이미지, 성별, 생성형 이미지 유무, 이메일
        // flask api인 post 요청으로 퍼스널 컬러 검사 결과 요청
        // get요청으로 predict_shape()해서 얼굴형 받기
        return "Only You~~";
    }

    // 하나 더 만들어서 생성형 이미지 유무에 맞게 요청 보내기
    // 요거는 front에서 구분해서 보내주면 됨. 대신 -> 로딩 화면 X
}
