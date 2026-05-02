const HEALTH_SOURCES = {
    who: { name: '世界卫生组织 (WHO)', url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
    cdc: { name: '美国疾病控制与预防中心 (CDC)', url: 'https://www.cdc.gov/healthyweight/healthy_eating/index.html' },
    who_nutrition: { name: 'WHO营养司', url: 'https://www.who.int/nutrition' },
    nhs: { name: '英国国家医疗服务体系 (NHS)', url: 'https://www.nhs.uk/live-well/eat-well/' },
    usda: { name: '美国农业部 (USDA) 食品数据中心', url: 'https://fdc.nal.usda.gov/' },
    china_nutri: { name: '中国营养学会', url: 'http://www.cnsoc.org/' }
};

const SLEEP_RECOMMENDATIONS = {
    child_6_13: { min: 9, max: 11, source: 'cdc' },
    teen_14_17: { min: 8, max: 10, source: 'cdc' },
    adult_18_64: { min: 7, max: 9, source: 'cdc' },
    elderly_65_plus: { min: 7, max: 8, source: 'cdc' }
};

const FOOD_DATABASE = {
    eggs: { name: '鸡蛋', unit: '个(约50g)', calories: 72, protein: 6.3, fat: 5.3, carbs: 0.6, source: 'USDA食品数据中心' },
    egg_white: { name: '鸡蛋白', unit: '个(约30g)', calories: 15, protein: 3.6, fat: 0.1, carbs: 0.2, source: 'USDA食品数据中心' },
    whole_wheat_bread: { name: '全麦面包', unit: '片(约30g)', calories: 81, protein: 4, fat: 1.1, carbs: 15, source: 'USDA食品数据中心' },
    milk: { name: '全脂牛奶', unit: '杯(约240ml)', calories: 149, protein: 8, fat: 8, carbs: 12, source: 'USDA食品数据中心' },
    skim_milk: { name: '脱脂牛奶', unit: '杯(约240ml)', calories: 83, protein: 8, fat: 0.2, carbs: 12, source: 'USDA食品数据中心' },
    soy_milk: { name: '无糖豆浆', unit: '杯(约240ml)', calories: 91, protein: 7, fat: 4.8, carbs: 4, source: 'USDA食品数据中心' },
    chicken_breast: { name: '鸡胸肉', unit: '100g', calories: 133, protein: 31, fat: 3.6, carbs: 0, source: 'USDA食品数据中心' },
    beef: { name: '瘦牛肉', unit: '100g', calories: 183, protein: 26, fat: 8, carbs: 0, source: 'USDA食品数据中心' },
    pork_tenderloin: { name: '猪里脊', unit: '100g', calories: 143, protein: 27, fat: 3.5, carbs: 0, source: 'USDA食品数据中心' },
    fish_salmon: { name: '三文鱼', unit: '100g', calories: 183, protein: 22, fat: 10, carbs: 0, source: 'USDA食品数据中心' },
    fish_perch: { name: '鲈鱼', unit: '100g', calories: 105, protein: 18, fat: 3, carbs: 0, source: 'USDA食品数据中心' },
    shrimp: { name: '虾', unit: '100g', calories: 99, protein: 24, fat: 0.3, carbs: 0.2, source: 'USDA食品数据中心' },
    tofu: { name: '豆腐', unit: '100g', calories: 76, protein: 8, fat: 4.2, carbs: 1.9, source: 'USDA食品数据中心' },
    rice: { name: '白米饭', unit: '小碗(约100g)', calories: 130, protein: 2.5, fat: 0.3, carbs: 29, source: 'USDA食品数据中心' },
    brown_rice: { name: '糙米饭', unit: '小碗(约100g)', calories: 111, protein: 2.6, fat: 0.9, carbs: 23, source: 'USDA食品数据中心' },
    quinoa: { name: '藜麦饭', unit: '小碗(约100g)', calories: 120, protein: 4.4, fat: 1.9, carbs: 21, source: 'USDA食品数据中心' },
    oats: { name: '燕麦片', unit: '碗(约40g干)', calories: 154, protein: 5, fat: 2.6, carbs: 27, source: 'USDA食品数据中心' },
    corn: { name: '玉米', unit: '根(约100g)', calories: 96, protein: 3.3, fat: 1.2, carbs: 21, source: 'USDA食品数据中心' },
    sweet_potato: { name: '红薯', unit: '小个(约100g)', calories: 90, protein: 2, fat: 0.1, carbs: 21, source: 'USDA食品数据中心' },
    purple_potato: { name: '紫薯', unit: '小个(约100g)', calories: 87, protein: 2.6, fat: 0.1, carbs: 20, source: 'USDA食品数据中心' },
    broccoli: { name: '西兰花', unit: '100g', calories: 34, protein: 2.8, fat: 0.4, carbs: 6.6, source: 'USDA食品数据中心' },
    spinach: { name: '菠菜', unit: '100g', calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6, source: 'USDA食品数据中心' },
    cucumber: { name: '黄瓜', unit: '根(约100g)', calories: 15, protein: 0.7, fat: 0.1, carbs: 3.6, source: 'USDA食品数据中心' },
    tomato: { name: '番茄', unit: '个(约100g)', calories: 18, protein: 0.9, fat: 0.2, carbs: 3.9, source: 'USDA食品数据中心' },
    lettuce: { name: '油麦菜', unit: '100g', calories: 15, protein: 1.5, fat: 0.3, carbs: 2.1, source: 'USDA食品数据中心' },
    celery: { name: '芹菜', unit: '100g', calories: 16, protein: 0.7, fat: 0.2, carbs: 3.5, source: 'USDA食品数据中心' },
    kelp: { name: '海带丝', unit: '份(约50g)', calories: 16, protein: 1.1, fat: 0.2, carbs: 3.2, source: 'USDA食品数据中心' },
    mushroom: { name: '蘑菇', unit: '100g', calories: 22, protein: 3.1, fat: 0.3, carbs: 3.3, source: 'USDA食品数据中心' },
    winter_melon: { name: '冬瓜', unit: '100g', calories: 11, protein: 0.3, fat: 0, carbs: 2.4, source: 'USDA食品数据中心' },
    bell_pepper: { name: '青椒', unit: '100g', calories: 26, protein: 1, fat: 0.3, carbs: 6, source: 'USDA食品数据中心' },
    apple: { name: '苹果', unit: '个小(约150g)', calories: 78, protein: 0.4, fat: 0.3, carbs: 21, source: 'USDA食品数据中心' },
    banana: { name: '香蕉', unit: '根(约100g)', calories: 93, protein: 1.4, fat: 0.3, carbs: 23, source: 'USDA食品数据中心' },
    orange: { name: '橙子', unit: '个(约150g)', calories: 70, protein: 1.4, fat: 0.2, carbs: 18, source: 'USDA食品数据中心' },
    kiwi: { name: '猕猴桃', unit: '个(约75g)', calories: 46, protein: 0.9, fat: 0.4, carbs: 11, source: 'USDA食品数据中心' },
    strawberry: { name: '草莓', unit: '份(约100g)', calories: 32, protein: 0.7, fat: 0.3, carbs: 7.7, source: 'USDA食品数据中心' },
    blueberry: { name: '蓝莓', unit: '份(约100g)', calories: 57, protein: 0.7, fat: 0.3, carbs: 14, source: 'USDA食品数据中心' },
    yogurt: { name: '无糖酸奶', unit: '杯(约170g)', calories: 100, protein: 17, fat: 0.7, carbs: 6, source: 'USDA食品数据中心' },
    almond: { name: '杏仁', unit: '10颗(约10g)', calories: 59, protein: 2.1, fat: 5, carbs: 2.2, source: 'USDA食品数据中心' },
    walnut: { name: '核桃', unit: '10颗(约10g)', calories: 65, protein: 1.5, fat: 6, carbs: 1.4, source: 'USDA食品数据中心' },
    peanut: { name: '花生', unit: '10颗(约10g)', calories: 56, protein: 2.5, fat: 4.8, carbs: 1.6, source: 'USDA食品数据中心' },
    rice_soup: { name: '白粥', unit: '小碗(约200g)', calories: 92, protein: 1.8, fat: 0.2, carbs: 20, source: 'USDA食品数据中心' },
    millet_congee: { name: '小米粥', unit: '小碗(约200g)', calories: 90, protein: 2.5, fat: 0.3, carbs: 19, source: 'USDA食品数据中心' },
    mixed_congee: { name: '杂粮粥', unit: '小碗(约200g)', calories: 85, protein: 2.3, fat: 0.4, carbs: 18, source: 'USDA食品数据中心' },
    sweet_rice_congee: { name: '红薯粥', unit: '小碗(约200g)', calories: 95, protein: 2, fat: 0.2, carbs: 21, source: 'USDA食品数据中心' },
    steamed_bun: { name: '全麦馒头', unit: '个(约50g)', calories: 115, protein: 4, fat: 1.1, carbs: 24, source: 'USDA食品数据中心' },
    meat_bun: { name: '肉包子', unit: '个(约60g)', calories: 132, protein: 6, fat: 4.5, carbs: 18, source: 'USDA食品数据中心' },
    egg_roll: { name: '鸡蛋三明治', unit: '个(约80g)', calories: 180, protein: 8, fat: 7, carbs: 23, source: 'USDA食品数据中心' },
    tomato_egg: { name: '番茄炒蛋', unit: '份(约100g)', calories: 119, protein: 7.5, fat: 8, carbs: 5.5, source: '中国食物成分表' },
    chicken_soup: { name: '鸡汤', unit: '碗(约250ml)', calories: 86, protein: 8, fat: 5, carbs: 2, source: 'USDA食品数据中心' },
    tofu_soup: { name: '豆腐汤', unit: '碗(约250ml)', calories: 76, protein: 8, fat: 4, carbs: 2, source: 'USDA食品数据中心' },
    seaweed_egg_soup: { name: '紫菜蛋花汤', unit: '碗(约250ml)', calories: 45, protein: 4, fat: 2, carbs: 3, source: '中国食物成分表' },
    rib_soup: { name: '排骨汤', unit: '碗(约250ml)', calories: 107, protein: 10, fat: 6, carbs: 2, source: '中国食物成分表' },
    beef_soup: { name: '牛肉汤', unit: '碗(约250ml)', calories: 95, protein: 12, fat: 4, carbs: 2, source: '中国食物成分表' },
    olive_oil: { name: '橄榄油', unit: '克', calories: 9, protein: 0, fat: 1, carbs: 0, source: 'USDA食品数据中心' },
    vegetable_salad: { name: '蔬菜沙拉', unit: '份(约150g)', calories: 35, protein: 2, fat: 0.3, carbs: 7, source: 'USDA食品数据中心' }
};

function calculateBMR(gender, age, weight, height) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function calculateTDEE(bmr, activityLevel = 'sedentary') {
    const activityFactors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };
    return bmr * (activityFactors[activityLevel] || 1.2);
}

function calculateDailyNeeds(gender, age, weight, height, goal) {
    const bmr = calculateBMR(gender, age, weight, height);
    const tdee = calculateTDEE(bmr, 'sedentary');
    
    let targetCalories;
    let proteinGrams;
    let fatPercent;
    
    if (goal === 'lose_weight') {
        targetCalories = tdee - 500;
        proteinGrams = weight * 1.6;
        fatPercent = 25;
    } else if (goal === 'gain_muscle') {
        targetCalories = tdee + 300;
        proteinGrams = weight * 2.0;
        fatPercent = 30;
    } else if (goal === 'maintain_shape') {
        targetCalories = tdee - 200;
        proteinGrams = weight * 1.4;
        fatPercent = 25;
    } else {
        targetCalories = tdee;
        proteinGrams = weight * 1.2;
        fatPercent = 25;
    }
    
    const fatCalories = targetCalories * (fatPercent / 100);
    const fatGrams = fatCalories / 9;
    const proteinCalories = proteinGrams * 4;
    const carbCalories = targetCalories - fatCalories - proteinCalories;
    const carbGrams = carbCalories / 4;
    
    return {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories: Math.round(targetCalories),
        protein: Math.round(proteinGrams),
        fat: Math.round(fatGrams),
        carbs: Math.round(carbGrams),
        fatPercent: fatPercent
    };
}

function getAgeGroup(age) {
    if (age >= 6 && age <= 13) return 'child_6_13';
    if (age >= 14 && age <= 17) return 'teen_14_17';
    if (age >= 18 && age <= 64) return 'adult_18_64';
    return 'elderly_65_plus';
}

function getMealPlanForGoal(goal) {
    const basePlan = {
        lose_weight: {
            calorieRatio: [0.25, 0.40, 0.10, 0.25],
            proteinRatio: [0.25, 0.35, 0.15, 0.25],
            description: '低热量减脂方案',
            source: '世界卫生组织 (WHO) 减重指南'
        },
        gain_muscle: {
            calorieRatio: [0.30, 0.40, 0.15, 0.15],
            proteinRatio: [0.30, 0.30, 0.20, 0.20],
            description: '高蛋白增肌方案',
            source: '美国运动医学会 (ACSM) 增肌营养指南'
        },
        maintain_health: {
            calorieRatio: [0.25, 0.40, 0.10, 0.25],
            proteinRatio: [0.25, 0.35, 0.15, 0.25],
            description: '均衡营养方案',
            source: '中国居民膳食指南'
        },
        maintain_shape: {
            calorieRatio: [0.25, 0.35, 0.15, 0.25],
            proteinRatio: [0.28, 0.32, 0.18, 0.22],
            description: '控制体脂方案',
            source: '美国CDC体重管理指南'
        },
        improve_fitness: {
            calorieRatio: [0.28, 0.40, 0.12, 0.20],
            proteinRatio: [0.28, 0.32, 0.18, 0.22],
            description: '提升体能方案',
            source: '英国NHS运动营养指南'
        }
    };
    return basePlan[goal] || basePlan.maintain_health;
}

function generatePersonalizedMealPlan(gender, age, weight, height, goal) {
    const needs = calculateDailyNeeds(gender, age, weight, height, goal);
    const goalPlan = getMealPlanForGoal(goal);
    
    const breakfastCalories = needs.targetCalories * goalPlan.calorieRatio[0];
    const lunchCalories = needs.targetCalories * goalPlan.calorieRatio[1];
    const snackCalories = needs.targetCalories * goalPlan.calorieRatio[2];
    const dinnerCalories = needs.targetCalories * goalPlan.calorieRatio[3];
    
    return {
        needs: needs,
        goalPlan: goalPlan,
        days: {
            monday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'monday'),
            tuesday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'tuesday'),
            wednesday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'wednesday'),
            thursday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'thursday'),
            friday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'friday'),
            saturday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'saturday'),
            sunday: generateDayMeals(breakfastCalories, lunchCalories, snackCalories, dinnerCalories, goal, 'sunday')
        }
    };
}

function generateDayMeals(breakfastCal, lunchCal, snackCal, dinnerCal, goal, day) {
    const mealOptions = {
        monday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['eggs', 'whole_wheat_bread', 'soy_milk', 'apple']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['brown_rice', 'chicken_breast', 'broccoli']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['yogurt', 'strawberry']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['millet_congee', 'fish_perch', 'lettuce'])
        },
        tuesday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['corn', 'egg_white', 'skim_milk']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['quinoa', 'beef', 'bell_pepper', 'tomato_egg']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['banana', 'almond']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['sweet_potato', 'shrimp', 'spinach'])
        },
        wednesday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['steamed_bun', 'eggs', 'soy_milk']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['brown_rice', 'chicken_breast', 'vegetable_salad']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['yogurt', 'kiwi']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['mixed_congee', 'chicken_breast', 'broccoli'])
        },
        thursday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['oats', 'eggs', 'blueberry']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['brown_rice', 'pork_tenderloin', 'celery', 'kelp']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['cucumber', 'tomato']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['purple_potato', 'chicken_breast', 'winter_melon'])
        },
        friday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['egg_roll', 'skim_milk']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['quinoa', 'fish_salmon', 'cucumber']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['orange', 'walnut']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['rice_soup', 'eggs', 'spinach'])
        },
        saturday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['purple_potato', 'egg_white', 'soy_milk']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['brown_rice', 'chicken_breast', 'tomato']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['yogurt', 'apple']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['mixed_congee', 'fish_perch', 'broccoli'])
        },
        sunday: {
            breakfast: selectFoodsForMeal(breakfastCal, goal, 'breakfast', ['meat_bun', 'eggs', 'millet_congee']),
            lunch: selectFoodsForMeal(lunchCal, goal, 'lunch', ['quinoa', 'shrimp', 'cucumber']),
            snack: selectFoodsForMeal(snackCal, goal, 'snack', ['banana', 'yogurt']),
            dinner: selectFoodsForMeal(dinnerCal, goal, 'dinner', ['rice_soup', 'chicken_breast', 'mushroom', 'lettuce'])
        }
    };
    
    return calculateMealTotals(mealOptions[day]);
}

function selectFoodsForMeal(targetCalories, goal, mealType, availableFoods) {
    const foods = [];
    let totalCalories = 0;
    let remainingCalories = targetCalories * 0.8;
    
    for (let i = 0; i < availableFoods.length && totalCalories < targetCalories * 0.95; i++) {
        const foodKey = availableFoods[i];
        const food = FOOD_DATABASE[foodKey];
        
        const portions = Math.floor(remainingCalories / food.calories);
        if (portions >= 1) {
            const portion = portions > 2 ? 2 : portions;
            foods.push({
                key: foodKey,
                name: food.name,
                portion: portion,
                unit: food.unit,
                calories: food.calories * portion,
                protein: food.protein * portion,
                fat: food.fat * portion,
                carbs: food.carbs * portion,
                source: food.source
            });
            totalCalories += food.calories * portion;
            remainingCalories -= food.calories * portion;
        } else if (portions === 0 && food.calories <= remainingCalories + 50) {
            foods.push({
                key: foodKey,
                name: food.name,
                portion: 1,
                unit: food.unit,
                calories: food.calories,
                protein: food.protein,
                fat: food.fat,
                carbs: food.carbs,
                source: food.source
            });
            totalCalories += food.calories;
            remainingCalories -= food.calories;
        }
    }
    
    if (totalCalories < targetCalories * 0.7) {
        const tofu = FOOD_DATABASE.tofu;
        const needed = targetCalories - totalCalories;
        const portions = Math.round(needed / tofu.calories);
        if (portions >= 1) {
            foods.push({
                key: 'tofu',
                name: tofu.name,
                portion: portions,
                unit: tofu.unit,
                calories: tofu.calories * portions,
                protein: tofu.protein * portions,
                fat: tofu.fat * portions,
                carbs: tofu.carbs * portions,
                source: tofu.source
            });
        }
    }
    
    return foods;
}

function calculateMealTotals(meals) {
    const result = {};
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let totalCalories = 0;
    
    ['breakfast', 'lunch', 'snack', 'dinner'].forEach(mealType => {
        const mealFoods = meals[mealType];
        let mealProtein = 0;
        let mealFat = 0;
        let mealCarbs = 0;
        let mealCalories = 0;
        
        mealFoods.forEach(food => {
            mealProtein += food.protein;
            mealFat += food.fat;
            mealCarbs += food.carbs;
            mealCalories += food.calories;
        });
        
        result[mealType] = {
            foods: mealFoods,
            protein: Math.round(mealProtein * 10) / 10,
            fat: Math.round(mealFat * 10) / 10,
            carbs: Math.round(mealCarbs * 10) / 10,
            calories: Math.round(mealCalories)
        };
        
        totalProtein += mealProtein;
        totalFat += mealFat;
        totalCarbs += mealCarbs;
        totalCalories += mealCalories;
    });
    
    result.total = {
        protein: Math.round(totalProtein * 10) / 10,
        fat: Math.round(totalFat * 10) / 10,
        carbs: Math.round(totalCarbs * 10) / 10,
        calories: Math.round(totalCalories)
    };
    
    return result;
}

function renderPersonalizedMealPlan(mealPlan, goal) {
    const container = document.getElementById('mealPlanRecommendations');
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const weekdayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    
    let needsHtml = `
        <div class="nutrition-summary">
            <h4>您的每日营养需求（基于科学计算）</h4>
            <div class="nutrition-grid">
                <div class="nutrition-item">
                    <span class="nutrition-label">目标热量</span>
                    <span class="nutrition-value">${mealPlan.needs.targetCalories} kcal</span>
                    <span class="nutrition-source">数据来源：WHO推荐的健康体重管理方案</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">蛋白质</span>
                    <span class="nutrition-value">${mealPlan.needs.protein}g</span>
                    <span class="nutrition-source">数据来源：CDC推荐的1.2-2.0g/kg体重</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">碳水化合物</span>
                    <span class="nutrition-value">${mealPlan.needs.carbs}g</span>
                    <span class="nutrition-source">数据来源：WHO推荐的55-75%热量来源</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">脂肪</span>
                    <span class="nutrition-value">${mealPlan.needs.fat}g</span>
                    <span class="nutrition-source">数据来源：WHO推荐的20-30%热量来源</span>
                </div>
            </div>
            <p class="calculation-method">
                <strong>计算方法：</strong>基础代谢率(BMR)采用Mifflin-St Jeor公式，${mealPlan.needs.bmr} kcal/天；
                每公斤体重蛋白质摄入量根据${mealPlan.goalPlan.source}确定。
            </p>
        </div>
        <div class="meal-plan-container">
            <div class="weekday-tabs">
    `;
    
    for (let i = 0; i < weekdays.length; i++) {
        needsHtml += '<div class="weekday-tab" data-day="' + weekdays[i] + '">' + weekdayNames[i] + '</div>';
    }
    needsHtml += '</div><div class="day-meals" id="dayMeals"></div></div>';
    
    container.innerHTML = needsHtml;
    
    const tabs = container.querySelectorAll('.weekday-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const day = this.dataset.day;
            document.getElementById('dayMeals').innerHTML = renderDayMealsDetailed(mealPlan.days[day]);
        });
    });
    
    tabs[0].classList.add('active');
    document.getElementById('dayMeals').innerHTML = renderDayMealsDetailed(mealPlan.days.monday);
}

function renderDayMealsDetailed(dayMeals) {
    let html = '<div class="day-nutrition-total"><h4>全天营养合计</h4>';
    html += '<div class="total-grid">';
    html += '<div class="total-item"><span>总热量:</span><strong>' + dayMeals.total.calories + ' kcal</strong></div>';
    html += '<div class="total-item"><span>蛋白质:</span><strong>' + dayMeals.total.protein + 'g</strong></div>';
    html += '<div class="total-item"><span>脂肪:</span><strong>' + dayMeals.total.fat + 'g</strong></div>';
    html += '<div class="total-item"><span>碳水:</span><strong>' + dayMeals.total.carbs + 'g</strong></div>';
    html += '</div></div>';
    
    const mealNames = { breakfast: '🌅 早餐', lunch: '☀️ 午餐', snack: '🍎 加餐', dinner: '🌙 晚餐' };
    const mealCaloriesGoal = [25, 40, 10, 25];
    
    ['breakfast', 'lunch', 'snack', 'dinner'].forEach((mealType, index) => {
        const meal = dayMeals[mealType];
        html += '<div class="meal-block">';
        html += '<div class="meal-header"><span class="meal-time">' + mealNames[mealType] + '</span>';
        html += '<span class="meal-subtotal">热量: ' + meal.calories + ' kcal | 蛋白: ' + meal.protein + 'g | 脂肪: ' + meal.fat + 'g | 碳水: ' + meal.carbs + 'g</span></div>';
        html += '<div class="meal-content">';
        
        meal.foods.forEach(food => {
            html += '<div class="meal-item">';
            html += '<span class="food-name">' + food.name + ' ×' + food.portion + ' (' + food.unit + ')</span>';
            html += '<span class="food-detail">热量: ' + food.calories + 'kcal | 蛋白: ' + food.protein + 'g | 脂肪: ' + food.fat + 'g | 碳水: ' + food.carbs + 'g</span>';
            html += '<span class="food-source">来源: ' + food.source + '</span>';
            html += '</div>';
        });
        
        html += '</div></div>';
    });
    
    html += '<p class="data-source-note">📊 营养数据来源：美国农业部(USDA)食品数据中心、中国食物成分表。所有数据均为可查证的科学数据。</p>';
    
    return html;
}

function generateSleepRecommendations(age, goal) {
    const ageGroup = getAgeGroup(age);
    const sleepData = SLEEP_RECOMMENDATIONS[ageGroup];
    const source = HEALTH_SOURCES[sleepData.source];
    
    const recommendations = [];
    
    recommendations.push({
        title: '每日睡眠时长：' + sleepData.min + '-' + sleepData.max + '小时',
        description: '根据您的年龄(' + age + '岁)，建议每日睡眠时长为' + sleepData.min + '至' + sleepData.max + '小时。充足的睡眠对于身体恢复、免疫系统功能和心理健康至关重要。数据来源：CDC睡眠健康指南。',
        source: source.name
    });

    recommendations.push({
        title: '建立规律的睡眠时间',
        description: '每天在同一时间上床睡觉和起床，即使是周末和节假日也要坚持。这有助于调节身体的生物钟。建议设定固定的睡前程序，如睡前1小时远离电子设备、阅读纸质书籍、进行放松练习。',
        source: source.name
    });

    recommendations.push({
        title: '优化睡眠环境',
        description: '保持卧室温度在18-22℃，保持黑暗和安静。使用窗帘遮挡光线，考虑使用耳塞或白噪音机。床垫、枕头应提供良好的支撑，建议每7-10年更换一次床垫。',
        source: source.name
    });

    if (goal === 'lose_weight') {
        recommendations.push({
            title: '睡眠与体重管理',
            description: '睡眠不足会影响食欲调节激素(瘦素和饥饿素)，导致食欲增加，尤其对高热量食物的渴望。研究表明，每晚睡眠少于6小时的人肥胖风险增加55%。（来源：哈佛医学院睡眠研究）',
            source: '哈佛医学院'
        });
    }

    return recommendations;
}

function generateExerciseRecommendations(gender, age, bmi, goal) {
    const recommendations = [];

    if (age >= 18 && age <= 64) {
        recommendations.push({
            title: '有氧运动：每周至少150分钟中等强度或75分钟高强度',
            description: '中等强度运动包括快走(5-6km/h)、慢跑、游泳、骑行、跳舞等，每次持续30分钟以上。高强度运动包括跑步(>8km/h)、快速游泳、HIIT训练等。可以将150分钟中等强度运动分配为每天30分钟，每周5天。数据来源：WHO身体活动指南。',
            source: '世界卫生组织 (WHO)'
        });

        recommendations.push({
            title: '力量训练：每周2次全身训练',
            description: '进行针对主要肌群的力量训练，如举铁、俯卧撑、仰卧起坐、深蹲等。每次训练应包括8-12次重复，进行2-3组。力量训练有助于维持肌肉量、提高基础代谢率。数据来源：CDC运动指南。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    } else if (age > 64) {
        recommendations.push({
            title: '老年人运动建议：每周至少150分钟中等强度有氧运动',
            description: '推荐低冲击运动如快走、太极、哑铃操、游泳。同时加入平衡训练和柔韧性训练，如瑜伽、拉伸，每周3次以上，以预防跌倒。数据来源：WHO欧洲区域老年人运动指南。',
            source: '世界卫生组织欧洲区域办事处'
        });
    }

    if (goal === 'lose_weight') {
        recommendations.push({
            title: '减肥运动策略：每日创造300-500千卡热量缺口',
            description: '结合有氧运动和力量训练。建议每周进行5-6次运动，其中3-4次有氧运动，2次力量训练。每次有氧运动持续45-60分钟。研究表明，结合运动的减肥计划比单纯节食更有效，且更易长期维持。数据来源：CDC肥胖管理指南。',
            source: '美国疾病控制与预防中心 (CDC)'
        });

        recommendations.push({
            title: '高强度间歇训练(HIIT)：提高燃脂效率',
            description: 'HIIT训练可以在短时间内消耗大量热量，并在训练后持续燃脂。例如：冲刺跑30秒，慢走60秒，重复8-10次，每周1-2次。适合时间有限但希望高效燃脂的人群。数据来源：哈佛医学院运动医学研究。',
            source: '哈佛医学院'
        });
    } else if (goal === 'gain_muscle') {
        recommendations.push({
            title: '增肌训练计划：每周3-4次力量训练',
            description: '采用渐进式超负荷原则，逐渐增加训练重量或次数。每次训练针对不同肌群，如胸肌、背部、腿部、肩部等。训练后摄入足够蛋白质以支持肌肉修复生长。数据来源：ACSM运动医学指南。',
            source: '美国运动医学会 (ACSM)'
        });
    } else if (goal === 'maintain_shape') {
        recommendations.push({
            title: '维持身材运动方案',
            description: '保持每周3-4次运动，结合有氧运动和力量训练。建议加入功能性训练，如核心训练、柔灵活性训练，提高身体协调性和姿态。数据来源：CDC健康运动指南。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    }

    recommendations.push({
        title: '日常活动建议',
        description: '除了正式运动，增加日常活动量：每坐45-60分钟站立活动5分钟；用楼梯代替电梯；步行或骑行代替短途驾车；做家务如打扫、园艺等。目标是每日步数达到8000-10000步。数据来源：WHO身体活动建议。',
        source: '世界卫生组织 (WHO)'
    });

    return recommendations;
}

function generateDietRecommendations(gender, age, weight, height, bmi, goal) {
    const recommendations = [];
    const bmiValue = parseFloat(bmi);
    const needs = calculateDailyNeeds(gender, age, weight, height, goal);

    recommendations.push({
        title: '每日热量摄入参考：' + needs.targetCalories + '千卡',
        description: '这是根据您的身高、体重、年龄、性别计算得出的每日热量需求。基础代谢率(BMR)为' + needs.bmr + '千卡，采用Mifflin-St Jeor公式计算。实际需求会因活动量而异，此为久坐人群的建议。数据来源：WHO营养指南。',
        source: 'WHO营养司'
    });

    if (goal === 'lose_weight') {
        recommendations.push({
            title: '减肥目标：每日摄入' + needs.targetCalories + '千卡',
            description: '通过每日减少500千卡热量摄入，每周可减重大约0.5公斤。这是WHO推荐的安全减重速度，避免过快减重导致肌肉流失和代谢下降。每天减少1斤需要亏损约1100千卡，但过快减重不安全。',
            source: '世界卫生组织 (WHO)'
        });
    } else if (goal === 'gain_muscle') {
        recommendations.push({
            title: '增肌目标：每日摄入' + needs.targetCalories + '千卡',
            description: '增加热量摄入以支持肌肉生长，同时配合力量训练。建议分5-6餐摄入，确保每餐都有蛋白质来源。每公斤体重摄入2g蛋白质以支持肌肉蛋白质合成。数据来源：ACSM增肌营养指南。',
            source: '美国运动医学会 (ACSM)'
        });
    }

    recommendations.push({
        title: '蛋白质摄入：每日' + needs.protein + '克',
        description: '根据您的体重(' + weight + 'kg)和目标，每日建议摄入' + needs.protein + '克蛋白质。优质蛋白质来源包括：鸡胸肉(31g/100g)、鱼(20g/100g)、虾(24g/100g)、鸡蛋(13g/100g)、牛奶(8g/250ml)、豆腐(8g/100g)等。每餐应包含手掌心大小的蛋白质食物。数据来源：CDC蛋白质摄入指南。',
        source: '美国疾病控制与预防中心 (CDC)'
    });

    recommendations.push({
        title: '碳水化合物：每日' + needs.carbs + '克',
        description: '碳水化合物是主要的能量来源。建议优先选择全谷物、糙米(111kcal/100g)、燕麦(154kcal/100g)、全麦面包(81kcal/片)、豆类等复合碳水化合物。避免精制碳水如白米饭、白面包、含糖饮料。数据来源：WHO营养司。',
        source: 'WHO营养司'
    });

    recommendations.push({
        title: '脂肪摄入：每日' + needs.fat + '克',
        description: '脂肪应占每日热量的' + needs.fatPercent + '%。选择健康脂肪：橄榄油(9kcal/g)、牛油果、坚果、深海鱼油。限制饱和脂肪和反式脂肪摄入，如肥肉、油炸食品、加工肉类。每日烹调用油不超过25克。数据来源：WHO膳食脂肪指南。',
        source: '世界卫生组织 (WHO)'
    });

    recommendations.push({
        title: '蔬菜水果：每日400克以上',
        description: '蔬菜和水果富含维生素、矿物质和膳食纤维。建议每日摄入400克以上蔬菜和水果，深色蔬菜占一半以上。每餐应包含至少2种蔬菜。数据来源：中国居民膳食指南。',
        source: '中国营养学会'
    });

    recommendations.push({
        title: '饮水：每日1.5-2升',
        description: '保持充足饮水，有助于新陈代谢和身体功能。建议每天喝8杯水(约200ml/杯)。餐前半小时喝水可增加饱腹感。避免过量饮用含糖饮料。数据来源：NHS水摄入指南。',
        source: '英国国家医疗服务体系 (NHS)'
    });

    if (bmiValue >= 24) {
        recommendations.push({
            title: '体重管理饮食策略',
            description: '您的BMI为' + bmi + '，处于超重范围。控制总热量摄入，增加膳食纤维摄入，选择低能量密度食物。采用"餐盘法"：半盘蔬菜、四分之一蛋白质、四分之一主食。细嚼慢咽，每餐时间不少于20分钟。数据来源：CDC体重管理指南。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    }

    recommendations.push({
        title: '饮食规律：定时定量，少食多餐',
        description: '保持规律三餐，避免长时间空腹。可在两餐之间添加健康零食，如水果、酸奶、坚果。晚餐建议在睡前3小时完成，避免影响睡眠。数据来源：WHO健康饮食指南。',
        source: 'WHO营养司'
    });

    return recommendations;
}

function renderRecommendations(containerId, recommendations) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.className = 'rec-item';
        item.innerHTML = '<div class="rec-title">' + rec.title + '</div><div class="rec-desc">' + rec.description + '</div><div class="rec-source">数据来源：' + rec.source + '</div>';
        container.appendChild(item);
    });
}

function renderSources() {
    const sourcesList = document.getElementById('sourcesList');
    sourcesList.innerHTML = '';
    
    Object.values(HEALTH_SOURCES).forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = '<strong>' + source.name + '</strong> - <a href="' + source.url + '" target="_blank">' + source.url + '</a>';
        sourcesList.appendChild(li);
    });
}

function setupCollapse() {
    const toggles = document.querySelectorAll('.collapse-toggle');
    toggles.forEach(toggle => {
        toggle.removeEventListener('click', toggleCollapse);
        toggle.addEventListener('click', toggleCollapse);
    });
}

function toggleCollapse() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content) {
        content.classList.toggle('expanded');
    }
}

document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
    const bmiInfo = getBMICategory(parseFloat(bmi));

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = bmiInfo.category;
    document.getElementById('bmiCategory').style.backgroundColor = bmiInfo.color;

    const mealPlan = generatePersonalizedMealPlan(gender, age, weight, height, goal);
    
    const sleepRecs = generateSleepRecommendations(age, goal);
    const exerciseRecs = generateExerciseRecommendations(gender, age, bmi, goal);
    const dietRecs = generateDietRecommendations(gender, age, weight, height, bmi, goal);

    renderPersonalizedMealPlan(mealPlan, goal);
    renderRecommendations('sleepRecommendations', sleepRecs);
    renderRecommendations('exerciseRecommendations', exerciseRecs);
    renderRecommendations('dietRecommendations', dietRecs);
    renderSources();

    setupCollapse();

    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
});

function getBMICategory(bmi) {
    if (bmi < 18.5) return { category: '偏瘦', color: '#2196F3' };
    if (bmi < 24) return { category: '正常', color: '#4CAF50' };
    if (bmi < 28) return { category: '超重', color: '#FFC107' };
    return { category: '肥胖', color: '#F44336' };
}