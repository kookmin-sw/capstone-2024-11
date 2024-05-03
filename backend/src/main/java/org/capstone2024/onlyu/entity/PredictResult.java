package org.capstone2024.onlyu.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
public class PredictResult {
    List<String> predictColorRes;
    Map<String, List<String>> predictProbability;
    String predictShapeRes;

    public PredictResult(List<String> predictColorRes, Map<String, List<String>> predictProbability, String predictShapeRes) {
        this.predictColorRes = predictColorRes;
        this.predictProbability = predictProbability;
        this.predictShapeRes = predictShapeRes;
    }


}
