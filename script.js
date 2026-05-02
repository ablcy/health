const VERSION = 'v0.0.4';

const TRANSLATIONS = {
    zh: {
        'header-title': '健康顾问',
        'header-subtitle': '基于国际权威机构标准的个性化健康建议',
        'input-title': '输入您的健康信息',
        'label-gender': '性别',
        'label-age': '年龄（岁）',
        'label-height': '身高（厘米）',
        'label-weight': '体重（公斤）',
        'label-goal': '健康目标',
        'option-select': '请选择',
        'option-male': '男性',
        'option-female': '女性',
        'option-select-goal': '请选择您的目标',
        'goal-maintain': '保持健康',
        'goal-shape': '保持身材',
        'goal-lose': '减肥',
        'goal-muscle': '增肌',
        'goal-fitness': '提升体能',
        'submit-btn': '获取个性化建议',
        'result-title': '您的健康报告',
        'bmi-title': '身体质量指数（BMI）',
        'bmi-underweight': '偏瘦',
        'bmi-normal': '正常',
        'bmi-overweight': '超重',
        'bmi-obese': '肥胖',
        'meal-plan-title': '📅 一周食谱计划',
        'sleep-title': '💤 睡眠建议',
        'exercise-title': '🏋️ 运动建议',
        'diet-title': '🥗 饮食建议',
        'sources-title': '数据来源',
        'footer-source': '基于WHO、CDC、USDA、哈佛医学院、中国营养学会等权威机构标准提供健康建议',
        'version-note': '科学化食谱系统版本',
        'your-daily-needs': '您的每日营养需求（基于科学计算）',
        'target-calories': '目标热量',
        'protein': '蛋白质',
        'carbs': '碳水化合物',
        'fat': '脂肪',
        'data-source-who': '数据来源：WHO推荐的健康体重管理方案',
        'data-source-cdc-protein': '数据来源：CDC推荐的1.2-2.0g/kg体重',
        'data-source-who-carbs': '数据来源：WHO推荐的55-75%热量来源',
        'data-source-who-fat': '数据来源：WHO推荐的20-30%热量来源',
        'calculation-method': '计算方法：基础代谢率(BMR)采用Mifflin-St Jeor公式',
        'per-kg-protein': '每公斤体重蛋白质摄入量根据',
        'day-total': '全天营养合计',
        'total-calories': '总热量',
        'total-protein': '蛋白质',
        'total-fat': '脂肪',
        'total-carbs': '碳水',
        'breakfast': '🌅 早餐',
        'lunch': '☀️ 午餐',
        'snack': '🍎 加餐',
        'dinner': '🌙 晚餐',
        'calories-kcal': 'kcal',
        'food-source-note': '📊 营养数据来源：美国农业部(USDA)食品数据中心、中国食物成分表。所有数据均为可查证的科学数据。',
        'theme-light': '浅色',
        'theme-dark': '深色'
    },
    en: {
        'header-title': 'Health Advisor',
        'header-subtitle': 'Personalized Health Recommendations Based on International Authority Standards',
        'input-title': 'Enter Your Health Information',
        'label-gender': 'Gender',
        'label-age': 'Age (years)',
        'label-height': 'Height (cm)',
        'label-weight': 'Weight (kg)',
        'label-goal': 'Health Goal',
        'option-select': 'Please Select',
        'option-male': 'Male',
        'option-female': 'Female',
        'option-select-goal': 'Please Select Your Goal',
        'goal-maintain': 'Maintain Health',
        'goal-shape': 'Maintain Shape',
        'goal-lose': 'Lose Weight',
        'goal-muscle': 'Build Muscle',
        'goal-fitness': 'Improve Fitness',
        'submit-btn': 'Get Personalized Recommendations',
        'result-title': 'Your Health Report',
        'bmi-title': 'Body Mass Index (BMI)',
        'bmi-underweight': 'Underweight',
        'bmi-normal': 'Normal',
        'bmi-overweight': 'Overweight',
        'bmi-obese': 'Obese',
        'meal-plan-title': '📅 Weekly Meal Plan',
        'sleep-title': '💤 Sleep Recommendations',
        'exercise-title': '🏋️ Exercise Recommendations',
        'diet-title': '🥗 Diet Recommendations',
        'sources-title': 'Data Sources',
        'footer-source': 'Health recommendations based on WHO, CDC, USDA, Harvard Medical School, Chinese Nutrition Society and other authoritative institutions',
        'version-note': 'Scientific Meal Planning System Version',
        'your-daily-needs': 'Your Daily Nutritional Needs (Based on Scientific Calculations)',
        'target-calories': 'Target Calories',
        'protein': 'Protein',
        'carbs': 'Carbohydrates',
        'fat': 'Fat',
        'data-source-who': 'Source: WHO Healthy Weight Management Guidelines',
        'data-source-cdc-protein': 'Source: CDC Recommended 1.2-2.0g/kg Body Weight',
        'data-source-who-carbs': 'Source: WHO Recommended 55-75% Calorie Source',
        'data-source-who-fat': 'Source: WHO Recommended 20-30% Calorie Source',
        'calculation-method': 'Calculation Method: BMR using Mifflin-St Jeor formula',
        'per-kg-protein': 'Per kg body weight protein intake according to',
        'day-total': 'Daily Nutrition Total',
        'total-calories': 'Total Calories',
        'total-protein': 'Protein',
        'total-fat': 'Fat',
        'total-carbs': 'Carbs',
        'breakfast': '🌅 Breakfast',
        'lunch': '☀️ Lunch',
        'snack': '🍎 Snack',
        'dinner': '🌙 Dinner',
        'calories-kcal': 'kcal',
        'food-source-note': '📊 Nutritional data source: USDA Food Data Central, China Food Composition Table. All data is verifiable scientific data.',
        'theme-light': 'Light',
        'theme-dark': 'Dark'
    }
};

const HEALTH_SOURCES = {
    who: { name: '世界卫生组织 (WHO)', nameEn: 'World Health Organization (WHO)', url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
    cdc: { name: '美国疾病控制与预防中心 (CDC)', nameEn: 'US Centers for Disease Control and Prevention (CDC)', url: 'https://www.cdc.gov/healthyweight/healthy_eating/index.html' },
    who_nutrition: { name: 'WHO营养司', nameEn: 'WHO Nutrition Division', url: 'https://www.who.int/nutrition' },
    nhs: { name: '英国国家医疗服务体系 (NHS)', nameEn: 'UK National Health Service (NHS)', url: 'https://www.nhs.uk/live-well/eat-well/' },
    usda: { name: '美国农业部 (USDA) 食品数据中心', nameEn: 'USDA Food Data Central', url: 'https://fdc.nal.usda.gov/' },
    china_nutri: { name: '中国营养学会', nameEn: 'Chinese Nutrition Society', url: 'http://www.cnsoc.org/' }
};

const SLEEP_RECOMMENDATIONS = {
    child_6_13: { min: 9, max: 11, source: 'cdc' },
    teen_14_17: { min: 8, max: 10, source: 'cdc' },
    adult_18_64: { min: 7, max: 9, source: 'cdc' },
    elderly_65_plus: { min: 7, max: 8, source: 'cdc' }
};

let currentLang = 'zh';
let currentTheme = 'light';

function t(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updatePageTranslations();
    savePreferences();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    savePreferences();
}

function updatePageTranslations() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLang === 'zh' ? 'EN' : '中';
    }
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
            return;
        }
        el.textContent = t(key);
    });
    
    document.querySelectorAll('option[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = t(key);
    });
    
    if (typeof renderPersonalizedMealPlan === 'function') {
        const form = document.getElementById('healthForm');
        if (form && document.getElementById('resultSection').style.display !== 'none') {
            form.dispatchEvent(new Event('submit'));
        }
    }
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

function savePreferences() {
    localStorage.setItem('healthAdvisorLang', currentLang);
    localStorage.setItem('healthAdvisorTheme', currentTheme);
}

function loadPreferences() {
    const savedLang = localStorage.getItem('healthAdvisorLang');
    const savedTheme = localStorage.getItem('healthAdvisorTheme');
    
    if (savedLang) {
        currentLang = savedLang;
    }
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.setAttribute('data-theme', currentTheme);
    }
    
    updateThemeIcon();
    updatePageTranslations();
}

document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
    
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});

const FOOD_DATABASE = {
    eggs: { name: '鸡蛋', nameEn: 'Egg', unit: '个(约50g)', unitEn: 'piece (~50g)', calories: 72, protein: 6.3, fat: 5.3, carbs: 0.6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    egg_white: { name: '鸡蛋白', nameEn: 'Egg White', unit: '个(约30g)', unitEn: 'piece (~30g)', calories: 15, protein: 3.6, fat: 0.1, carbs: 0.2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    whole_wheat_bread: { name: '全麦面包', nameEn: 'Whole Wheat Bread', unit: '片(约30g)', unitEn: 'slice (~30g)', calories: 81, protein: 4, fat: 1.1, carbs: 15, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    milk: { name: '全脂牛奶', nameEn: 'Whole Milk', unit: '杯(约240ml)', unitEn: 'cup (~240ml)', calories: 149, protein: 8, fat: 8, carbs: 12, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    skim_milk: { name: '脱脂牛奶', nameEn: 'Skim Milk', unit: '杯(约240ml)', unitEn: 'cup (~240ml)', calories: 83, protein: 8, fat: 0.2, carbs: 12, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    soy_milk: { name: '无糖豆浆', nameEn: 'Unsweetened Soy Milk', unit: '杯(约240ml)', unitEn: 'cup (~240ml)', calories: 91, protein: 7, fat: 4.8, carbs: 4, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    chicken_breast: { name: '鸡胸肉', nameEn: 'Chicken Breast', unit: '100g', unitEn: '100g', calories: 133, protein: 31, fat: 3.6, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    beef: { name: '瘦牛肉', nameEn: 'Lean Beef', unit: '100g', unitEn: '100g', calories: 183, protein: 26, fat: 8, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    pork_tenderloin: { name: '猪里脊', nameEn: 'Pork Tenderloin', unit: '100g', unitEn: '100g', calories: 143, protein: 27, fat: 3.5, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    fish_salmon: { name: '三文鱼', nameEn: 'Salmon', unit: '100g', unitEn: '100g', calories: 183, protein: 22, fat: 10, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    fish_perch: { name: '鲈鱼', nameEn: 'Sea Bass', unit: '100g', unitEn: '100g', calories: 105, protein: 18, fat: 3, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    shrimp: { name: '虾', nameEn: 'Shrimp', unit: '100g', unitEn: '100g', calories: 99, protein: 24, fat: 0.3, carbs: 0.2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    tofu: { name: '豆腐', nameEn: 'Tofu', unit: '100g', unitEn: '100g', calories: 76, protein: 8, fat: 4.2, carbs: 1.9, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    rice: { name: '白米饭', nameEn: 'White Rice', unit: '小碗(约100g)', unitEn: 'small bowl (~100g)', calories: 130, protein: 2.5, fat: 0.3, carbs: 29, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    brown_rice: { name: '糙米饭', nameEn: 'Brown Rice', unit: '小碗(约100g)', unitEn: 'small bowl (~100g)', calories: 111, protein: 2.6, fat: 0.9, carbs: 23, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    quinoa: { name: '藜麦饭', nameEn: 'Quinoa', unit: '小碗(约100g)', unitEn: 'small bowl (~100g)', calories: 120, protein: 4.4, fat: 1.9, carbs: 21, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    oats: { name: '燕麦片', nameEn: 'Oatmeal', unit: '碗(约40g干)', unitEn: 'bowl (~40g dry)', calories: 154, protein: 5, fat: 2.6, carbs: 27, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    corn: { name: '玉米', nameEn: 'Corn', unit: '根(约100g)', unitEn: 'ear (~100g)', calories: 96, protein: 3.3, fat: 1.2, carbs: 21, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    sweet_potato: { name: '红薯', nameEn: 'Sweet Potato', unit: '小个(约100g)', unitEn: 'small (~100g)', calories: 90, protein: 2, fat: 0.1, carbs: 21, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    purple_potato: { name: '紫薯', nameEn: 'Purple Sweet Potato', unit: '小个(约100g)', unitEn: 'small (~100g)', calories: 87, protein: 2.6, fat: 0.1, carbs: 20, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    broccoli: { name: '西兰花', nameEn: 'Broccoli', unit: '100g', unitEn: '100g', calories: 34, protein: 2.8, fat: 0.4, carbs: 6.6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    spinach: { name: '菠菜', nameEn: 'Spinach', unit: '100g', unitEn: '100g', calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    cucumber: { name: '黄瓜', nameEn: 'Cucumber', unit: '根(约100g)', unitEn: 'piece (~100g)', calories: 15, protein: 0.7, fat: 0.1, carbs: 3.6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    tomato: { name: '番茄', nameEn: 'Tomato', unit: '个(约100g)', unitEn: 'piece (~100g)', calories: 18, protein: 0.9, fat: 0.2, carbs: 3.9, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    lettuce: { name: '油麦菜', nameEn: 'Romaine Lettuce', unit: '100g', unitEn: '100g', calories: 15, protein: 1.5, fat: 0.3, carbs: 2.1, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    celery: { name: '芹菜', nameEn: 'Celery', unit: '100g', unitEn: '100g', calories: 16, protein: 0.7, fat: 0.2, carbs: 3.5, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    kelp: { name: '海带丝', nameEn: 'Kelp', unit: '份(约50g)', unitEn: 'serving (~50g)', calories: 16, protein: 1.1, fat: 0.2, carbs: 3.2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    mushroom: { name: '蘑菇', nameEn: 'Mushroom', unit: '100g', unitEn: '100g', calories: 22, protein: 3.1, fat: 0.3, carbs: 3.3, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    winter_melon: { name: '冬瓜', nameEn: 'Winter Melon', unit: '100g', unitEn: '100g', calories: 11, protein: 0.3, fat: 0, carbs: 2.4, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    bell_pepper: { name: '青椒', nameEn: 'Bell Pepper', unit: '100g', unitEn: '100g', calories: 26, protein: 1, fat: 0.3, carbs: 6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    apple: { name: '苹果', nameEn: 'Apple', unit: '个小(约150g)', unitEn: 'small (~150g)', calories: 78, protein: 0.4, fat: 0.3, carbs: 21, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    banana: { name: '香蕉', nameEn: 'Banana', unit: '根(约100g)', unitEn: 'piece (~100g)', calories: 93, protein: 1.4, fat: 0.3, carbs: 23, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    orange: { name: '橙子', nameEn: 'Orange', unit: '个(约150g)', unitEn: 'piece (~150g)', calories: 70, protein: 1.4, fat: 0.2, carbs: 18, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    kiwi: { name: '猕猴桃', nameEn: 'Kiwi', unit: '个(约75g)', unitEn: 'piece (~75g)', calories: 46, protein: 0.9, fat: 0.4, carbs: 11, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    strawberry: { name: '草莓', nameEn: 'Strawberry', unit: '份(约100g)', unitEn: 'serving (~100g)', calories: 32, protein: 0.7, fat: 0.3, carbs: 7.7, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    blueberry: { name: '蓝莓', nameEn: 'Blueberry', unit: '份(约100g)', unitEn: 'serving (~100g)', calories: 57, protein: 0.7, fat: 0.3, carbs: 14, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    yogurt: { name: '无糖酸奶', nameEn: 'Unsweetened Yogurt', unit: '杯(约170g)', unitEn: 'cup (~170g)', calories: 100, protein: 17, fat: 0.7, carbs: 6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    almond: { name: '杏仁', nameEn: 'Almonds', unit: '10颗(约10g)', unitEn: '10 pieces (~10g)', calories: 59, protein: 2.1, fat: 5, carbs: 2.2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    walnut: { name: '核桃', nameEn: 'Walnuts', unit: '10颗(约10g)', unitEn: '10 pieces (~10g)', calories: 65, protein: 1.5, fat: 6, carbs: 1.4, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    peanut: { name: '花生', nameEn: 'Peanuts', unit: '10颗(约10g)', unitEn: '10 pieces (~10g)', calories: 56, protein: 2.5, fat: 4.8, carbs: 1.6, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    rice_soup: { name: '白粥', nameEn: 'Rice Congee', unit: '小碗(约200g)', unitEn: 'small bowl (~200g)', calories: 92, protein: 1.8, fat: 0.2, carbs: 20, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    millet_congee: { name: '小米粥', nameEn: 'Millet Congee', unit: '小碗(约200g)', unitEn: 'small bowl (~200g)', calories: 90, protein: 2.5, fat: 0.3, carbs: 19, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    mixed_congee: { name: '杂粮粥', nameEn: 'Mixed Grain Congee', unit: '小碗(约200g)', unitEn: 'small bowl (~200g)', calories: 85, protein: 2.3, fat: 0.4, carbs: 18, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    sweet_rice_congee: { name: '红薯粥', nameEn: 'Sweet Potato Congee', unit: '小碗(约200g)', unitEn: 'small bowl (~200g)', calories: 95, protein: 2, fat: 0.2, carbs: 21, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    steamed_bun: { name: '全麦馒头', nameEn: 'Whole Wheat Steamed Bun', unit: '个(约50g)', unitEn: 'piece (~50g)', calories: 115, protein: 4, fat: 1.1, carbs: 24, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    meat_bun: { name: '肉包子', nameEn: 'Meat Bun', unit: '个(约60g)', unitEn: 'piece (~60g)', calories: 132, protein: 6, fat: 4.5, carbs: 18, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    egg_roll: { name: '鸡蛋三明治', nameEn: 'Egg Sandwich', unit: '个(约80g)', unitEn: 'piece (~80g)', calories: 180, protein: 8, fat: 7, carbs: 23, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    tomato_egg: { name: '番茄炒蛋', nameEn: 'Tomato with Eggs', unit: '份(约100g)', unitEn: 'serving (~100g)', calories: 119, protein: 7.5, fat: 8, carbs: 5.5, source: '中国食物成分表', sourceEn: 'China Food Composition Table' },
    chicken_soup: { name: '鸡汤', nameEn: 'Chicken Soup', unit: '碗(约250ml)', unitEn: 'bowl (~250ml)', calories: 86, protein: 8, fat: 5, carbs: 2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    tofu_soup: { name: '豆腐汤', nameEn: 'Tofu Soup', unit: '碗(约250ml)', unitEn: 'bowl (~250ml)', calories: 76, protein: 8, fat: 4, carbs: 2, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    seaweed_egg_soup: { name: '紫菜蛋花汤', nameEn: 'Seaweed Egg Soup', unit: '碗(约250ml)', unitEn: 'bowl (~250ml)', calories: 45, protein: 4, fat: 2, carbs: 3, source: '中国食物成分表', sourceEn: 'China Food Composition Table' },
    rib_soup: { name: '排骨汤', nameEn: 'Rib Soup', unit: '碗(约250ml)', unitEn: 'bowl (~250ml)', calories: 107, protein: 10, fat: 6, carbs: 2, source: '中国食物成分表', sourceEn: 'China Food Composition Table' },
    beef_soup: { name: '牛肉汤', nameEn: 'Beef Soup', unit: '碗(约250ml)', unitEn: 'bowl (~250ml)', calories: 95, protein: 12, fat: 4, carbs: 2, source: '中国食物成分表', sourceEn: 'China Food Composition Table' },
    olive_oil: { name: '橄榄油', nameEn: 'Olive Oil', unit: '克', unitEn: 'gram', calories: 9, protein: 0, fat: 1, carbs: 0, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' },
    vegetable_salad: { name: '蔬菜沙拉', nameEn: 'Vegetable Salad', unit: '份(约150g)', unitEn: 'serving (~150g)', calories: 35, protein: 2, fat: 0.3, carbs: 7, source: 'USDA食品数据中心', sourceEn: 'USDA Food Data Central' }
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
            descriptionEn: 'Low Calorie Fat Loss Plan',
            source: '世界卫生组织 (WHO) 减重指南',
            sourceEn: 'WHO Weight Loss Guidelines'
        },
        gain_muscle: {
            calorieRatio: [0.30, 0.40, 0.15, 0.15],
            proteinRatio: [0.30, 0.30, 0.20, 0.20],
            description: '高蛋白增肌方案',
            descriptionEn: 'High Protein Muscle Building Plan',
            source: '美国运动医学会 (ACSM) 增肌营养指南',
            sourceEn: 'ACSM Muscle Building Nutrition Guidelines'
        },
        maintain_health: {
            calorieRatio: [0.25, 0.40, 0.10, 0.25],
            proteinRatio: [0.25, 0.35, 0.15, 0.25],
            description: '均衡营养方案',
            descriptionEn: 'Balanced Nutrition Plan',
            source: '中国居民膳食指南',
            sourceEn: 'Chinese Dietary Guidelines'
        },
        maintain_shape: {
            calorieRatio: [0.25, 0.35, 0.15, 0.25],
            proteinRatio: [0.28, 0.32, 0.18, 0.22],
            description: '控制体脂方案',
            descriptionEn: 'Body Fat Control Plan',
            source: '美国CDC体重管理指南',
            sourceEn: 'CDC Weight Management Guidelines'
        },
        improve_fitness: {
            calorieRatio: [0.28, 0.40, 0.12, 0.20],
            proteinRatio: [0.28, 0.32, 0.18, 0.22],
            description: '提升体能方案',
            descriptionEn: 'Fitness Improvement Plan',
            source: '英国NHS运动营养指南',
            sourceEn: 'NHS Sports Nutrition Guidelines'
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
                nameEn: food.nameEn,
                portion: portion,
                unit: food.unit,
                unitEn: food.unitEn,
                calories: Math.round(food.calories * portion),
                protein: Math.round(food.protein * portion * 10) / 10,
                fat: Math.round(food.fat * portion * 10) / 10,
                carbs: Math.round(food.carbs * portion * 10) / 10,
                source: food.source,
                sourceEn: food.sourceEn
            });
            totalCalories += food.calories * portion;
            remainingCalories -= food.calories * portion;
        } else if (portions === 0 && food.calories <= remainingCalories + 50) {
            foods.push({
                key: foodKey,
                name: food.name,
                nameEn: food.nameEn,
                portion: 1,
                unit: food.unit,
                unitEn: food.unitEn,
                calories: food.calories,
                protein: food.protein,
                fat: food.fat,
                carbs: food.carbs,
                source: food.source,
                sourceEn: food.sourceEn
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
                nameEn: tofu.nameEn,
                portion: portions,
                unit: tofu.unit,
                unitEn: tofu.unitEn,
                calories: tofu.calories * portions,
                protein: tofu.protein * portions,
                fat: tofu.fat * portions,
                carbs: tofu.carbs * portions,
                source: tofu.source,
                sourceEn: tofu.sourceEn
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
    const weekdayNames = currentLang === 'zh' 
        ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let needsHtml = '<div class="nutrition-summary">';
    needsHtml += '<h4>' + t('your-daily-needs') + '</h4>';
    needsHtml += '<div class="nutrition-grid">';
    needsHtml += '<div class="nutrition-item">';
    needsHtml += '<span class="nutrition-label">' + t('target-calories') + '</span>';
    needsHtml += '<span class="nutrition-value">' + mealPlan.needs.targetCalories + ' ' + t('calories-kcal') + '</span>';
    needsHtml += '<span class="nutrition-source">' + t('data-source-who') + '</span>';
    needsHtml += '</div>';
    needsHtml += '<div class="nutrition-item">';
    needsHtml += '<span class="nutrition-label">' + t('protein') + '</span>';
    needsHtml += '<span class="nutrition-value">' + mealPlan.needs.protein + 'g</span>';
    needsHtml += '<span class="nutrition-source">' + t('data-source-cdc-protein') + '</span>';
    needsHtml += '</div>';
    needsHtml += '<div class="nutrition-item">';
    needsHtml += '<span class="nutrition-label">' + t('carbs') + '</span>';
    needsHtml += '<span class="nutrition-value">' + mealPlan.needs.carbs + 'g</span>';
    needsHtml += '<span class="nutrition-source">' + t('data-source-who-carbs') + '</span>';
    needsHtml += '</div>';
    needsHtml += '<div class="nutrition-item">';
    needsHtml += '<span class="nutrition-label">' + t('fat') + '</span>';
    needsHtml += '<span class="nutrition-value">' + mealPlan.needs.fat + 'g</span>';
    needsHtml += '<span class="nutrition-source">' + t('data-source-who-fat') + '</span>';
    needsHtml += '</div>';
    needsHtml += '</div>';
    needsHtml += '<p class="calculation-method"><strong>' + (currentLang === 'zh' ? '计算方法：' : 'Calculation: ') + '</strong>' + t('calculation-method') + ', ' + mealPlan.needs.bmr + ' ' + t('calories-kcal') + '/' + (currentLang === 'zh' ? '天' : 'day') + '；' + t('per-kg-protein') + ' ' + (currentLang === 'zh' ? mealPlan.goalPlan.source : mealPlan.goalPlan.sourceEn) + ' ' + (currentLang === 'zh' ? '确定' : 'determine') + '。</p>';
    needsHtml += '</div>';
    needsHtml += '<div class="meal-plan-container">';
    needsHtml += '<div class="weekday-tabs">';
    
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
    const isZh = currentLang === 'zh';
    
    let html = '<div class="day-nutrition-total"><h4>' + t('day-total') + '</h4>';
    html += '<div class="total-grid">';
    html += '<div class="total-item"><span>' + t('total-calories') + ':</span><strong>' + dayMeals.total.calories + ' ' + t('calories-kcal') + '</strong></div>';
    html += '<div class="total-item"><span>' + t('total-protein') + ':</span><strong>' + dayMeals.total.protein + 'g</strong></div>';
    html += '<div class="total-item"><span>' + t('total-fat') + ':</span><strong>' + dayMeals.total.fat + 'g</strong></div>';
    html += '<div class="total-item"><span>' + t('total-carbs') + ':</span><strong>' + dayMeals.total.carbs + 'g</strong></div>';
    html += '</div></div>';
    
    const mealNames = { 
        breakfast: t('breakfast'), 
        lunch: t('lunch'), 
        snack: t('snack'), 
        dinner: t('dinner') 
    };
    
    ['breakfast', 'lunch', 'snack', 'dinner'].forEach((mealType, index) => {
        const meal = dayMeals[mealType];
        html += '<div class="meal-block">';
        html += '<div class="meal-header"><span class="meal-time">' + mealNames[mealType] + '</span>';
        html += '<span class="meal-subtotal">' + t('total-calories') + ': ' + meal.calories + ' ' + t('calories-kcal') + ' | ' + t('protein') + ': ' + meal.protein + 'g | ' + t('fat') + ': ' + meal.fat + 'g | ' + t('carbs') + ': ' + meal.carbs + 'g</span></div>';
        html += '<div class="meal-content">';
        
        meal.foods.forEach(food => {
            const foodName = isZh ? food.name : food.nameEn;
            const foodUnit = isZh ? food.unit : food.unitEn;
            const foodSource = isZh ? food.source : food.sourceEn;
            
            html += '<div class="meal-item">';
            html += '<span class="food-name">' + foodName + ' ×' + food.portion + ' (' + foodUnit + ')</span>';
            html += '<span class="food-detail">' + t('total-calories') + ': ' + food.calories + ' ' + t('calories-kcal') + ' | ' + t('protein') + ': ' + food.protein + 'g | ' + t('fat') + ': ' + food.fat + 'g | ' + t('carbs') + ': ' + food.carbs + 'g</span>';
            html += '<span class="food-source">' + (isZh ? '来源: ' : 'Source: ') + foodSource + '</span>';
            html += '</div>';
        });
        
        html += '</div></div>';
    });
    
    html += '<p class="data-source-note">' + t('food-source-note') + '</p>';
    
    return html;
}

function generateSleepRecommendations(age, goal) {
    const ageGroup = getAgeGroup(age);
    const sleepData = SLEEP_RECOMMENDATIONS[ageGroup];
    const source = HEALTH_SOURCES[sleepData.source];
    
    const recommendations = [];
    const isZh = currentLang === 'zh';
    
    recommendations.push({
        title: (isZh ? '每日睡眠时长：' : 'Daily Sleep Duration: ') + sleepData.min + '-' + sleepData.max + (isZh ? '小时' : ' hours'),
        description: (isZh ? '根据您的年龄(' : 'Based on your age (') + age + (isZh ? '岁)' : ' years old)') + (isZh ? '，建议每日睡眠时长为' : ', it is recommended to have ') + sleepData.min + (isZh ? '至' : '-') + sleepData.max + (isZh ? '小时。充足的睡眠对于身体恢复、免疫系统功能和心理健康至关重要。数据来源：CDC睡眠健康指南。' : ' hours of sleep daily. Adequate sleep is essential for physical recovery, immune system function, and mental health. Data source: CDC Sleep Health Guidelines.'),
        source: isZh ? source.name : source.nameEn
    });

    recommendations.push({
        title: (isZh ? '建立规律的睡眠时间' : 'Establish Regular Sleep Schedule'),
        description: (isZh ? '每天在同一时间上床睡觉和起床，即使是周末和节假日也要坚持。这有助于调节身体的生物钟。建议设定固定的睡前程序，如睡前1小时远离电子设备、阅读纸质书籍、进行放松练习。' : 'Go to bed and wake up at the same time every day, including weekends and holidays. This helps regulate your body clock. It is recommended to establish a fixed bedtime routine, such as staying away from electronic devices 1 hour before bed, reading physical books, or doing relaxation exercises.'),
        source: isZh ? source.name : source.nameEn
    });

    recommendations.push({
        title: (isZh ? '优化睡眠环境' : 'Optimize Sleep Environment'),
        description: (isZh ? '保持卧室温度在18-22℃，保持黑暗和安静。使用窗帘遮挡光线，考虑使用耳塞或白噪音机。床垫、枕头应提供良好的支撑，建议每7-10年更换一次床垫。' : 'Keep bedroom temperature at 18-22°C, maintain darkness and quiet. Use curtains to block light, consider using earplugs or white noise machines. Mattresses and pillows should provide good support, and it is recommended to replace mattresses every 7-10 years.'),
        source: isZh ? source.name : source.nameEn
    });

    if (goal === 'lose_weight') {
        recommendations.push({
            title: (isZh ? '睡眠与体重管理' : 'Sleep and Weight Management'),
            description: (isZh ? '睡眠不足会影响食欲调节激素(瘦素和饥饿素)，导致食欲增加，尤其对高热量食物的渴望。研究表明，每晚睡眠少于6小时的人肥胖风险增加55%。（来源：哈佛医学院睡眠研究）' : 'Sleep deprivation affects appetite-regulating hormones (leptin and ghrelin), leading to increased appetite, especially for high-calorie foods. Research shows that people sleeping less than 6 hours per night have a 55% increased risk of obesity. (Source: Harvard Medical School Sleep Research)'),
            source: isZh ? '哈佛医学院' : 'Harvard Medical School'
        });
    }

    return recommendations;
}

function generateExerciseRecommendations(gender, age, bmi, goal) {
    const recommendations = [];
    const isZh = currentLang === 'zh';

    if (age >= 18 && age <= 64) {
        recommendations.push({
            title: (isZh ? '有氧运动：每周至少150分钟中等强度或75分钟高强度' : 'Aerobic Exercise: At least 150 minutes moderate intensity or 75 minutes high intensity per week'),
            description: (isZh ? '中等强度运动包括快走(5-6km/h)、慢跑、游泳、骑行、跳舞等，每次持续30分钟以上。高强度运动包括跑步(>8km/h)、快速游泳、HIIT训练等。可以将150分钟中等强度运动分配为每天30分钟，每周5天。数据来源：WHO身体活动指南。' : 'Moderate intensity exercises include brisk walking (5-6 km/h), jogging, swimming, cycling, dancing, etc., for at least 30 minutes each time. High intensity exercises include running (>8 km/h), fast swimming, HIIT training, etc. You can distribute 150 minutes of moderate intensity exercise as 30 minutes daily, 5 days a week. Data source: WHO Physical Activity Guidelines.'),
            source: isZh ? '世界卫生组织 (WHO)' : 'World Health Organization (WHO)'
        });

        recommendations.push({
            title: (isZh ? '力量训练：每周2次全身训练' : 'Strength Training: 2 full-body sessions per week'),
            description: (isZh ? '进行针对主要肌群的力量训练，如举铁、俯卧撑、仰卧起坐、深蹲等。每次训练应包括8-12次重复，进行2-3组。力量训练有助于维持肌肉量、提高基础代谢率。数据来源：CDC运动指南。' : 'Perform strength training for major muscle groups, such as weight lifting, push-ups, sit-ups, squats, etc. Each session should include 8-12 repetitions, 2-3 sets. Strength training helps maintain muscle mass and improve basal metabolic rate. Data source: CDC Exercise Guidelines.'),
            source: isZh ? '美国疾病控制与预防中心 (CDC)' : 'US CDC'
        });
    } else if (age > 64) {
        recommendations.push({
            title: (isZh ? '老年人运动建议：每周至少150分钟中等强度有氧运动' : 'Elderly Exercise Recommendations: At least 150 minutes moderate intensity aerobic exercise per week'),
            description: (isZh ? '推荐低冲击运动如快走、太极、哑铃操、游泳。同时加入平衡训练和柔韧性训练，如瑜伽、拉伸，每周3次以上，以预防跌倒。数据来源：WHO欧洲区域老年人运动指南。' : 'Low-impact exercises such as brisk walking, tai chi, dumbbell exercises, swimming are recommended. Balance and flexibility training such as yoga and stretching should also be included, 3+ times per week, to prevent falls. Data source: WHO European Region Elderly Exercise Guidelines.'),
            source: isZh ? '世界卫生组织欧洲区域办事处' : 'WHO European Regional Office'
        });
    }

    if (goal === 'lose_weight') {
        recommendations.push({
            title: (isZh ? '减肥运动策略：每日创造300-500千卡热量缺口' : 'Weight Loss Exercise Strategy: Create 300-500 kcal calorie deficit daily'),
            description: (isZh ? '结合有氧运动和力量训练。建议每周进行5-6次运动，其中3-4次有氧运动，2次力量训练。每次有氧运动持续45-60分钟。研究表明，结合运动的减肥计划比单纯节食更有效，且更易长期维持。数据来源：CDC肥胖管理指南。' : 'Combine aerobic exercise and strength training. It is recommended to exercise 5-6 times per week, including 3-4 aerobic sessions and 2 strength training sessions. Each aerobic session should last 45-60 minutes. Research shows that exercise-based weight loss plans are more effective than diet alone and easier to maintain long-term. Data source: CDC Obesity Management Guidelines.'),
            source: isZh ? '美国疾病控制与预防中心 (CDC)' : 'US CDC'
        });

        recommendations.push({
            title: (isZh ? '高强度间歇训练(HIIT)：提高燃脂效率' : 'High Intensity Interval Training (HIIT): Improve Fat Burning Efficiency'),
            description: (isZh ? 'HIIT训练可以在短时间内消耗大量热量，并在训练后持续燃脂。例如：冲刺跑30秒，慢走60秒，重复8-10次，每周1-2次。适合时间有限但希望高效燃脂的人群。数据来源：哈佛医学院运动医学研究。' : 'HIIT training can consume a lot of calories in a short time and continues to burn fat after training. For example: sprint for 30 seconds, walk slowly for 60 seconds, repeat 8-10 times, 1-2 times per week. Suitable for people with limited time who want efficient fat burning. Data source: Harvard Medical School Sports Medicine Research.'),
            source: isZh ? '哈佛医学院' : 'Harvard Medical School'
        });
    } else if (goal === 'gain_muscle') {
        recommendations.push({
            title: (isZh ? '增肌训练计划：每周3-4次力量训练' : 'Muscle Building Training Plan: 3-4 strength training sessions per week'),
            description: (isZh ? '采用渐进式超负荷原则，逐渐增加训练重量或次数。每次训练针对不同肌群，如胸肌、背部、腿部、肩部等。训练后摄入足够蛋白质以支持肌肉修复生长。数据来源：ACSM运动医学指南。' : 'Apply progressive overload principle, gradually increase training weight or repetitions. Each training session targets different muscle groups, such as chest, back, legs, shoulders, etc. Consume adequate protein after training to support muscle repair and growth. Data source: ACSM Sports Medicine Guidelines.'),
            source: isZh ? '美国运动医学会 (ACSM)' : 'American College of Sports Medicine (ACSM)'
        });
    } else if (goal === 'maintain_shape') {
        recommendations.push({
            title: (isZh ? '维持身材运动方案' : 'Maintain Shape Exercise Plan'),
            description: (isZh ? '保持每周3-4次运动，结合有氧运动和力量训练。建议加入功能性训练，如核心训练、柔灵活性训练，提高身体协调性和姿态。数据来源：CDC健康运动指南。' : 'Maintain 3-4 exercise sessions per week, combining aerobic exercise and strength training. It is recommended to include functional training such as core training and flexibility training to improve body coordination and posture. Data source: CDC Healthy Exercise Guidelines.'),
            source: isZh ? '美国疾病控制与预防中心 (CDC)' : 'US CDC'
        });
    }

    recommendations.push({
        title: (isZh ? '日常活动建议' : 'Daily Activity Recommendations'),
        description: (isZh ? '除了正式运动，增加日常活动量：每坐45-60分钟站立活动5分钟；用楼梯代替电梯；步行或骑行代替短途驾车；做家务如打扫、园艺等。目标是每日步数达到8000-10000步。数据来源：WHO身体活动建议。' : 'In addition to formal exercise, increase daily physical activity: stand and move for 5 minutes every 45-60 minutes of sitting; use stairs instead of elevators; walk or cycle instead of short-distance driving; do housework such as cleaning, gardening, etc. The goal is to reach 8,000-10,000 steps daily. Data source: WHO Physical Activity Recommendations.'),
        source: isZh ? '世界卫生组织 (WHO)' : 'World Health Organization (WHO)'
    });

    return recommendations;
}

function generateDietRecommendations(gender, age, weight, height, bmi, goal) {
    const recommendations = [];
    const bmiValue = parseFloat(bmi);
    const needs = calculateDailyNeeds(gender, age, weight, height, goal);
    const isZh = currentLang === 'zh';

    recommendations.push({
        title: (isZh ? '每日热量摄入参考：' : 'Daily Calorie Intake Reference: ') + needs.targetCalories + ' ' + t('calories-kcal'),
        description: (isZh ? '这是根据您的身高、体重、年龄、性别计算得出的每日热量需求。基础代谢率(BMR)为' : 'This is your daily calorie requirement calculated based on your height, weight, age, and gender. Basal Metabolic Rate (BMR) is ') + needs.bmr + ' ' + t('calories-kcal') + (isZh ? '，采用Mifflin-St Jeor公式计算。实际需求会因活动量而异，此为久坐人群的建议。数据来源：WHO营养指南。' : ', calculated using the Mifflin-St Jeor formula. Actual needs vary with activity level, this is the recommendation for sedentary people. Data source: WHO Nutrition Guidelines.'),
        source: isZh ? 'WHO营养司' : 'WHO Nutrition Division'
    });

    if (goal === 'lose_weight') {
        recommendations.push({
            title: (isZh ? '减肥目标：每日摄入' : 'Weight Loss Goal: Daily intake of ') + needs.targetCalories + ' ' + t('calories-kcal'),
            description: (isZh ? '通过每日减少500千卡热量摄入，每周可减重大约0.5公斤。这是WHO推荐的安全减重速度，避免过快减重导致肌肉流失和代谢下降。' : 'By reducing daily calorie intake by 500 kcal, you can lose approximately 0.5 kg per week. This is the safe weight loss rate recommended by WHO, avoiding muscle loss and metabolic decline from too rapid weight loss.'),
            source: isZh ? '世界卫生组织 (WHO)' : 'World Health Organization (WHO)'
        });
    } else if (goal === 'gain_muscle') {
        recommendations.push({
            title: (isZh ? '增肌目标：每日摄入' : 'Muscle Building Goal: Daily intake of ') + needs.targetCalories + ' ' + t('calories-kcal'),
            description: (isZh ? '增加热量摄入以支持肌肉生长，同时配合力量训练。建议分5-6餐摄入，确保每餐都有蛋白质来源。每公斤体重摄入2g蛋白质以支持肌肉蛋白质合成。数据来源：ACSM增肌营养指南。' : 'Increase calorie intake to support muscle growth, combined with strength training. It is recommended to consume 5-6 meals per day, ensuring each meal has a protein source. 2g of protein per kg body weight to support muscle protein synthesis. Data source: ACSM Muscle Building Nutrition Guidelines.'),
            source: isZh ? '美国运动医学会 (ACSM)' : 'American College of Sports Medicine (ACSM)'
        });
    }

    recommendations.push({
        title: (isZh ? '蛋白质摄入：每日' : 'Protein Intake: Daily ') + needs.protein + 'g',
        description: (isZh ? '根据您的体重(' : 'Based on your weight (') + weight + 'kg)' + (isZh ? '和目标，每日建议摄入' : ' and goals, it is recommended to consume ') + needs.protein + 'g ' + (isZh ? '蛋白质。优质蛋白质来源包括：鸡胸肉(31g/100g)、鱼(20g/100g)、虾(24g/100g)、鸡蛋(13g/100g)、牛奶(8g/250ml)、豆腐(8g/100g)等。每餐应包含手掌心大小的蛋白质食物。数据来源：CDC蛋白质摄入指南。' : ' of protein daily. Quality protein sources include: chicken breast (31g/100g), fish (20g/100g), shrimp (24g/100g), eggs (13g/100g), milk (8g/250ml), tofu (8g/100g), etc. Each meal should contain protein food the size of your palm. Data source: CDC Protein Intake Guidelines.'),
        source: isZh ? '美国疾病控制与预防中心 (CDC)' : 'US CDC'
    });

    recommendations.push({
        title: (isZh ? '碳水化合物：每日' : 'Carbohydrates: Daily ') + needs.carbs + 'g',
        description: (isZh ? '碳水化合物是主要的能量来源。建议优先选择全谷物、糙米(111kcal/100g)、燕麦(154kcal/100g)、全麦面包(81kcal/片)、豆类等复合碳水化合物。避免精制碳水如白米饭，白面包、含糖饮料。数据来源：WHO营养司。' : 'Carbohydrates are the main energy source. It is recommended to prioritize whole grains, brown rice (111kcal/100g), oatmeal (154kcal/100g), whole wheat bread (81kcal/slice), legumes, etc. Avoid refined carbohydrates such as white rice, white bread, and sugary drinks. Data source: WHO Nutrition Division.'),
        source: isZh ? 'WHO营养司' : 'WHO Nutrition Division'
    });

    recommendations.push({
        title: (isZh ? '脂肪摄入：每日' : 'Fat Intake: Daily ') + needs.fat + 'g',
        description: (isZh ? '脂肪应占每日热量的' : 'Fat should account for ') + needs.fatPercent + '% ' + (isZh ? '。选择健康脂肪：橄榄油(9kcal/g)、牛油果、坚果、深海鱼油。限制饱和脂肪和反式脂肪摄入，如肥肉、油炸食品、加工肉类。每日烹调用油不超过25克。数据来源：WHO膳食脂肪指南。' : ' of daily calories. Choose healthy fats: olive oil (9kcal/g), avocados, nuts, and deep-sea fish oil. Limit saturated fat and trans fat intake, such as fatty meat, fried foods, and processed meats. Daily cooking oil should not exceed 25 grams. Data source: WHO Dietary Fat Guidelines.'),
        source: isZh ? '世界卫生组织 (WHO)' : 'World Health Organization (WHO)'
    });

    recommendations.push({
        title: (isZh ? '蔬菜水果：每日400克以上' : 'Vegetables and Fruits: 400g+ daily'),
        description: (isZh ? '蔬菜和水果富含维生素、矿物质和膳食纤维。建议每日摄入400克以上蔬菜和水果，深色蔬菜占一半以上。每餐应包含至少2种蔬菜。数据来源：中国居民膳食指南。' : 'Vegetables and fruits are rich in vitamins, minerals, and dietary fiber. It is recommended to consume 400g+ of vegetables and fruits daily, with dark-colored vegetables accounting for more than half. Each meal should contain at least 2 types of vegetables. Data source: Chinese Dietary Guidelines.'),
        source: isZh ? '中国营养学会' : 'Chinese Nutrition Society'
    });

    recommendations.push({
        title: (isZh ? '饮水：每日1.5-2升' : 'Water Intake: 1.5-2L daily'),
        description: (isZh ? '保持充足饮水，有助于新陈代谢和身体功能。建议每天喝8杯水(约200ml/杯)。餐前半小时喝水可增加饱腹感。避免过量饮用含糖饮料。数据来源：NHS水摄入指南。' : 'Maintain adequate water intake to help metabolism and body function. It is recommended to drink 8 glasses of water (~200ml/glass) daily. Drinking water half an hour before meals can increase satiety. Avoid excessive consumption of sugary drinks. Data source: NHS Water Intake Guidelines.'),
        source: isZh ? '英国国家医疗服务体系 (NHS)' : 'UK National Health Service (NHS)'
    });

    if (bmiValue >= 24) {
        recommendations.push({
            title: (isZh ? '体重管理饮食策略' : 'Weight Management Diet Strategy'),
            description: (isZh ? '您的BMI为' : 'Your BMI is ') + bmi + (isZh ? '，处于超重范围。控制总热量摄入，增加膳食纤维摄入，选择低能量密度食物。采用"餐盘法"：半盘蔬菜、四分之一蛋白质、四分之一主食。细嚼慢咽，每餐时间不少于20分钟。数据来源：CDC体重管理指南。' : ', which is in the overweight range. Control total calorie intake, increase dietary fiber intake, and choose low energy density foods. Use the "Plate Method": half a plate of vegetables, one quarter of protein, one quarter of staple food. Chew slowly, each meal should take at least 20 minutes. Data source: CDC Weight Management Guidelines.'),
            source: isZh ? '美国疾病控制与预防中心 (CDC)' : 'US CDC'
        });
    }

    recommendations.push({
        title: (isZh ? '饮食规律：定时定量，少食多餐' : 'Diet Regularity: Fixed quantity, smaller frequent meals'),
        description: (isZh ? '保持规律三餐，避免长时间空腹。可在两餐之间添加健康零食，如水果、酸奶、坚果。晚餐建议在睡前3小时完成，避免影响睡眠。数据来源：WHO健康饮食指南。' : 'Maintain regular three meals, avoid long periods of fasting. You can add healthy snacks between meals, such as fruits, yogurt, and nuts. It is recommended to finish dinner 3 hours before bedtime to avoid affecting sleep. Data source: WHO Healthy Eating Guidelines.'),
        source: isZh ? 'WHO营养司' : 'WHO Nutrition Division'
    });

    return recommendations;
}

function renderRecommendations(containerId, recommendations) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.className = 'rec-item';
        item.innerHTML = '<div class="rec-title">' + rec.title + '</div><div class="rec-desc">' + rec.description + '</div><div class="rec-source">' + (currentLang === 'zh' ? '数据来源：' : 'Data source: ') + rec.source + '</div>';
        container.appendChild(item);
    });
}

function renderSources() {
    const sourcesList = document.getElementById('sourcesList');
    sourcesList.innerHTML = '';
    const isZh = currentLang === 'zh';
    
    Object.values(HEALTH_SOURCES).forEach(source => {
        const li = document.createElement('li');
        const name = isZh ? source.name : source.nameEn;
        li.innerHTML = '<strong>' + name + '</strong> - <a href="' + source.url + '" target="_blank">' + source.url + '</a>';
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
    const isZh = currentLang === 'zh';
    if (bmi < 18.5) return { category: isZh ? '偏瘦' : 'Underweight', color: '#2196F3' };
    if (bmi < 24) return { category: isZh ? '正常' : 'Normal', color: '#4CAF50' };
    if (bmi < 28) return { category: isZh ? '超重' : 'Overweight', color: '#FFC107' };
    return { category: isZh ? '肥胖' : 'Obese', color: '#F44336' };
}