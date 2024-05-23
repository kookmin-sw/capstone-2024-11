package org.capstone2024.onlyu.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class PredictResult {
    Map<String, String> predictColorRes;
    Map<String, List<String>> predictColorProbability;
    Map<String, String> images;
    String predictShapeRes;
    Map<String, String> predictShapeProbability;
}
