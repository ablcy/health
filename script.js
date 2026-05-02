const HEALTH_SOURCES = {
    who: { name: '世界卫生组织 (WHO)', url: 'https://www.who.int' },
    cdc: { name: '美国疾病控制与预防中心 (CDC)', url: 'https://www.cdc.gov' },
    who_europe: { name: '世界卫生组织欧洲区域办事处', url: 'https://www.euro.who.int' },
    nhs: { name: '英国国家医疗服务体系 (NHS)', url: 'https://www.nhs.uk' },
    harvard: { name: '哈佛医学院', url: 'https://www.health.harvard.edu' },
    who_nutrition: { name: 'WHO营养司', url: 'https://www.who.int/nutrition' }
};

const SLEEP_RECOMMENDATIONS = {
    child_6_13: { min: 9, max: 11, source: 'cdc' },
    teen_14_17: { min: 8, max: 10, source: 'cdc' },
    adult_18_64: { min: 7, max: 9, source: 'cdc' },
    elderly_65_plus: { min: 7, max: 8, source: 'cdc' }
};

const MEAL_PLANS = {
    lose_weight: {
        monday: {
            breakfast: ['1个水煮蛋', '1片全麦面包', '1杯无糖豆浆', '1个小苹果'],
            lunch: ['1小碗杂粮饭', '100g鸡胸肉炒西兰花', '1份凉拌黄瓜'],
            snack: ['1杯无糖酸奶', '几颗草莓'],
            dinner: ['1小碗小米粥', '150g清蒸鱼', '1份蒜蓉油麦菜'],
            notes: '晚餐尽量在18:30前完成'
        },
        tuesday: {
            breakfast: ['1根玉米', '1个鸡蛋羹', '1杯脱脂牛奶'],
            lunch: ['1小碗燕麦饭', '100g瘦牛肉炒青椒', '1份番茄炒蛋'],
            snack: ['1根香蕉', '10颗杏仁'],
            dinner: ['1小碗红薯粥', '150g水煮虾', '1份凉拌菠菜'],
            notes: '中午可以适当增加蛋白质'
        },
        wednesday: {
            breakfast: ['1个全麦馒头', '1个水煮蛋', '1杯无糖豆浆'],
            lunch: ['1小碗糙米', '100g鸡胸肉沙拉', '1份凉拌番茄'],
            snack: ['1杯无糖酸奶', '1个猕猴桃'],
            dinner: ['1小碗杂粮粥', '150g清蒸鸡胸肉', '1份蒜蓉西兰花'],
            notes: '沙拉酱选择油醋汁'
        },
        thursday: {
            breakfast: ['1碗燕麦片', '1个鸡蛋', '几颗蓝莓'],
            lunch: ['1小碗杂粮饭', '100g瘦猪肉炒芹菜', '1份凉拌海带丝'],
            snack: ['1根黄瓜', '1个小番茄'],
            dinner: ['1小碗小米饭', '150g红烧鸡胸肉', '1份清炒冬瓜'],
            notes: '红烧用少量生抽和料酒'
        },
        friday: {
            breakfast: ['1个鸡蛋三明治(全麦面包)', '1杯脱脂牛奶'],
            lunch: ['1小碗藜麦饭', '100g三文鱼', '1份凉拌黄瓜'],
            snack: ['1个橙子', '10颗核桃'],
            dinner: ['1小碗白粥', '150g水煮蛋', '1份蒜蓉菠菜'],
            notes: '周五可以适当放松，但注意控制量'
        },
        saturday: {
            breakfast: ['1根紫薯', '1个鸡蛋羹', '1杯无糖豆浆'],
            lunch: ['1小碗糙米', '100g烤鸡胸肉', '1份凉拌番茄'],
            snack: ['1杯无糖酸奶', '1个苹果'],
            dinner: ['1小碗杂粮粥', '150g清蒸鲈鱼', '1份清炒西兰花'],
            notes: '周末也要保持规律饮食'
        },
        sunday: {
            breakfast: ['1个全麦包子', '1个水煮蛋', '1杯小米粥'],
            lunch: ['1小碗燕麦饭', '100g炒虾仁', '1份凉拌黄瓜'],
            snack: ['1根香蕉', '1杯无糖酸奶'],
            dinner: ['1小碗白粥', '150g鸡胸肉炒木耳', '1份蒜蓉油麦菜'],
            notes: '准备迎接新的一周'
        }
    },
    gain_muscle: {
        monday: {
            breakfast: ['3个水煮蛋', '2片全麦面包', '1杯全脂牛奶', '1根香蕉'],
            lunch: ['1大碗杂粮饭', '200g鸡胸肉炒西兰花', '1份番茄炒蛋', '1碗豆腐汤'],
            snack: ['1杯蛋白粉', '1个苹果', '20颗杏仁'],
            dinner: ['1大碗糙米', '200g清蒸鱼', '1份蒜蓉菠菜', '1个水煮蛋'],
            notes: '训练后30分钟内补充蛋白质'
        },
        tuesday: {
            breakfast: ['2个鸡蛋', '1根玉米', '1杯全脂牛奶', '1个橙子'],
            lunch: ['1大碗燕麦饭', '200g瘦牛肉炒青椒', '1份凉拌黄瓜', '1碗紫菜蛋花汤'],
            snack: ['1杯酸奶', '1根香蕉', '10颗核桃'],
            dinner: ['1大碗小米饭', '200g水煮虾', '1份蒜蓉西兰花', '1个鸡蛋'],
            notes: '每餐蛋白质要充足'
        },
        wednesday: {
            breakfast: ['3个鸡蛋羹', '1个全麦馒头', '1杯豆浆'],
            lunch: ['1大碗糙米', '200g鸡胸肉沙拉', '1份凉拌番茄', '1碗鸡汤'],
            snack: ['1杯蛋白粉', '1个猕猴桃', '15颗杏仁'],
            dinner: ['1大碗杂粮饭', '200g红烧牛肉', '1份清炒菠菜', '1个鸡蛋'],
            notes: '沙拉酱选择蛋黄酱增加热量'
        },
        thursday: {
            breakfast: ['2个水煮蛋', '1碗燕麦片', '1杯全脂牛奶'],
            lunch: ['1大碗杂粮饭', '200g瘦猪肉炒芹菜', '1份凉拌海带丝', '1碗排骨汤'],
            snack: ['1杯酸奶', '1根香蕉', '20颗花生'],
            dinner: ['1大碗小米饭', '200g清蒸鸡胸肉', '1份蒜蓉西兰花', '1个鸡蛋'],
            notes: '多喝水促进代谢'
        },
        friday: {
            breakfast: ['3个鸡蛋', '2片全麦面包', '1杯全脂牛奶'],
            lunch: ['1大碗藜麦饭', '200g三文鱼', '1份凉拌黄瓜', '1碗豆腐汤'],
            snack: ['1杯蛋白粉', '1个橙子', '10颗核桃'],
            dinner: ['1大碗白米饭', '200g炒虾仁', '1份番茄炒蛋', '1个鸡蛋'],
            notes: '周五可以适当增加碳水'
        },
        saturday: {
            breakfast: ['2个鸡蛋', '1根紫薯', '1杯豆浆', '1个苹果'],
            lunch: ['1大碗糙米', '200g烤鸡胸肉', '1份凉拌番茄', '1碗牛肉汤'],
            snack: ['1杯酸奶', '1根香蕉', '15颗杏仁'],
            dinner: ['1大碗杂粮饭', '200g清蒸鲈鱼', '1份清炒西兰花', '1个鸡蛋'],
            notes: '周末可以适当加餐'
        },
        sunday: {
            breakfast: ['3个水煮蛋', '1个全麦包子', '1杯小米粥'],
            lunch: ['1大碗燕麦饭', '200g炒虾仁', '1份凉拌黄瓜', '1碗鸡汤'],
            snack: ['1杯蛋白粉', '1个橙子', '20颗杏仁'],
            dinner: ['1大碗白米饭', '200g鸡胸肉炒木耳', '1份蒜蓉油麦菜', '1个鸡蛋'],
            notes: '准备迎接新的一周'
        }
    },
    maintain_health: {
        monday: {
            breakfast: ['1个水煮蛋', '1片全麦面包', '1杯牛奶', '1个苹果'],
            lunch: ['1小碗米饭', '100g瘦肉', '1份蔬菜', '1碗汤'],
            snack: ['1杯酸奶', '几颗草莓'],
            dinner: ['1小碗米饭', '150g鱼', '1份绿叶蔬菜'],
            notes: '保持均衡饮食'
        },
        tuesday: {
            breakfast: ['1根玉米', '1个鸡蛋', '1杯豆浆'],
            lunch: ['1小碗米饭', '100g鸡胸肉', '1份番茄炒蛋', '1份凉拌黄瓜'],
            snack: ['1根香蕉', '10颗杏仁'],
            dinner: ['1小碗米饭', '150g虾', '1份蒜蓉菠菜'],
            notes: '注意蔬菜的摄入量'
        },
        wednesday: {
            breakfast: ['1个鸡蛋羹', '1个馒头', '1杯牛奶'],
            lunch: ['1小碗米饭', '100g瘦牛肉', '1份西兰花', '1碗汤'],
            snack: ['1杯酸奶', '1个猕猴桃'],
            dinner: ['1小碗杂粮粥', '150g清蒸鱼', '1份凉拌黄瓜'],
            notes: '晚餐不要吃得太饱'
        },
        thursday: {
            breakfast: ['1碗燕麦片', '1个鸡蛋', '几颗蓝莓'],
            lunch: ['1小碗米饭', '100g瘦猪肉', '1份芹菜', '1份凉拌海带'],
            snack: ['1个小番茄', '1根黄瓜'],
            dinner: ['1小碗米饭', '150g鸡胸肉', '1份蒜蓉油麦菜'],
            notes: '多喝水'
        },
        friday: {
            breakfast: ['1个鸡蛋三明治', '1杯牛奶'],
            lunch: ['1小碗米饭', '100g三文鱼', '1份蔬菜沙拉', '1碗汤'],
            snack: ['1个橙子', '10颗核桃'],
            dinner: ['1小碗白粥', '150g鸡蛋', '1份菠菜'],
            notes: '周末前保持规律'
        },
        saturday: {
            breakfast: ['1根紫薯', '1个鸡蛋', '1杯豆浆'],
            lunch: ['1小碗米饭', '100g烤鸡肉', '1份凉拌番茄', '1碗汤'],
            snack: ['1杯酸奶', '1个苹果'],
            dinner: ['1小碗杂粮粥', '150g鲈鱼', '1份西兰花'],
            notes: '周末可以适当放松'
        },
        sunday: {
            breakfast: ['1个包子', '1个鸡蛋', '1杯小米粥'],
            lunch: ['1小碗米饭', '100g虾仁', '1份黄瓜', '1碗鸡汤'],
            snack: ['1根香蕉', '1杯酸奶'],
            dinner: ['1小碗米饭', '150g鸡胸肉', '1份油麦菜'],
            notes: '准备新一周'
        }
    },
    maintain_shape: {
        monday: {
            breakfast: ['1个水煮蛋', '1片全麦面包', '1杯无糖豆浆', '1个小苹果'],
            lunch: ['1小碗杂粮饭', '100g鸡胸肉', '1份蔬菜', '1碗豆腐汤'],
            snack: ['1杯无糖酸奶', '几颗草莓'],
            dinner: ['1小碗小米粥', '150g清蒸鱼', '1份蒜蓉菠菜'],
            notes: '控制碳水化合物摄入'
        },
        tuesday: {
            breakfast: ['1根玉米', '1个鸡蛋', '1杯脱脂牛奶'],
            lunch: ['1小碗燕麦饭', '100g瘦牛肉', '1份番茄炒蛋', '1份凉拌黄瓜'],
            snack: ['1根香蕉', '10颗杏仁'],
            dinner: ['1小碗红薯粥', '150g水煮虾', '1份凉拌菠菜'],
            notes: '保持蛋白质摄入'
        },
        wednesday: {
            breakfast: ['1个鸡蛋羹', '1个全麦馒头', '1杯豆浆'],
            lunch: ['1小碗糙米', '100g鸡胸肉沙拉', '1份凉拌番茄'],
            snack: ['1杯无糖酸奶', '1个猕猴桃'],
            dinner: ['1小碗杂粮粥', '150g清蒸鸡胸肉', '1份蒜蓉西兰花'],
            notes: '少油少盐'
        },
        thursday: {
            breakfast: ['1碗燕麦片', '1个鸡蛋', '几颗蓝莓'],
            lunch: ['1小碗杂粮饭', '100g瘦猪肉', '1份芹菜', '1份凉拌海带'],
            snack: ['1个小番茄', '1根黄瓜'],
            dinner: ['1小碗小米饭', '150g红烧鸡胸肉', '1份清炒冬瓜'],
            notes: '红烧用少量油'
        },
        friday: {
            breakfast: ['1个鸡蛋三明治', '1杯脱脂牛奶'],
            lunch: ['1小碗藜麦饭', '100g三文鱼', '1份凉拌黄瓜'],
            snack: ['1个橙子', '10颗核桃'],
            dinner: ['1小碗白粥', '150g水煮蛋', '1份菠菜'],
            notes: '周五可以适当放松'
        },
        saturday: {
            breakfast: ['1根紫薯', '1个鸡蛋', '1杯无糖豆浆'],
            lunch: ['1小碗糙米', '100g烤鸡胸肉', '1份凉拌番茄'],
            snack: ['1杯无糖酸奶', '1个苹果'],
            dinner: ['1小碗杂粮粥', '150g清蒸鲈鱼', '1份西兰花'],
            notes: '周末也要注意饮食'
        },
        sunday: {
            breakfast: ['1个全麦包子', '1个鸡蛋', '1杯小米粥'],
            lunch: ['1小碗燕麦饭', '100g虾仁', '1份黄瓜'],
            snack: ['1根香蕉', '1杯无糖酸奶'],
            dinner: ['1小碗白粥', '150g鸡胸肉', '1份油麦菜'],
            notes: '准备新一周'
        }
    },
    improve_fitness: {
        monday: {
            breakfast: ['2个水煮蛋', '1片全麦面包', '1杯牛奶', '1根香蕉'],
            lunch: ['1大碗米饭', '150g鸡胸肉', '1份蔬菜', '1碗汤'],
            snack: ['1杯蛋白粉', '1个苹果'],
            dinner: ['1大碗米饭', '150g鱼', '1份绿叶蔬菜'],
            notes: '训练日增加碳水'
        },
        tuesday: {
            breakfast: ['1根玉米', '2个鸡蛋', '1杯豆浆'],
            lunch: ['1大碗米饭', '150g瘦牛肉', '1份番茄炒蛋', '1份凉拌黄瓜'],
            snack: ['1杯酸奶', '1根香蕉'],
            dinner: ['1小碗米饭', '150g虾', '1份蒜蓉菠菜'],
            notes: '非训练日保持均衡'
        },
        wednesday: {
            breakfast: ['2个鸡蛋羹', '1个馒头', '1杯牛奶'],
            lunch: ['1大碗米饭', '150g鸡胸肉', '1份西兰花', '1碗汤'],
            snack: ['1杯蛋白粉', '1个猕猴桃'],
            dinner: ['1小碗杂粮粥', '150g清蒸鱼', '1份凉拌黄瓜'],
            notes: '训练日注意恢复'
        },
        thursday: {
            breakfast: ['1碗燕麦片', '2个鸡蛋', '几颗蓝莓'],
            lunch: ['1大碗米饭', '150g瘦猪肉', '1份芹菜', '1份凉拌海带'],
            snack: ['1个小番茄', '1根黄瓜'],
            dinner: ['1大碗米饭', '150g鸡胸肉', '1份蒜蓉油麦菜'],
            notes: '保持水分摄入'
        },
        friday: {
            breakfast: ['2个鸡蛋', '2片全麦面包', '1杯牛奶'],
            lunch: ['1大碗米饭', '150g三文鱼', '1份蔬菜沙拉', '1碗汤'],
            snack: ['1杯蛋白粉', '1个橙子'],
            dinner: ['1小碗白粥', '150g鸡蛋', '1份菠菜'],
            notes: '周末前适当放松'
        },
        saturday: {
            breakfast: ['1根紫薯', '2个鸡蛋', '1杯豆浆'],
            lunch: ['1大碗米饭', '150g烤鸡肉', '1份凉拌番茄', '1碗汤'],
            snack: ['1杯酸奶', '1个苹果'],
            dinner: ['1小碗杂粮粥', '150g鲈鱼', '1份西兰花'],
            notes: '周末可以进行户外活动'
        },
        sunday: {
            breakfast: ['1个包子', '2个鸡蛋', '1杯小米粥'],
            lunch: ['1大碗米饭', '150g虾仁', '1份黄瓜', '1碗鸡汤'],
            snack: ['1根香蕉', '1杯酸奶'],
            dinner: ['1小碗米饭', '150g鸡胸肉', '1份油麦菜'],
            notes: '休息好准备新一周'
        }
    }
};

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return { category: '偏瘦', color: '#2196F3' };
    if (bmi < 24) return { category: '正常', color: '#4CAF50' };
    if (bmi < 28) return { category: '超重', color: '#FFC107' };
    return { category: '肥胖', color: '#F44336' };
}

function getAgeGroup(age) {
    if (age >= 6 && age <= 13) return 'child_6_13';
    if (age >= 14 && age <= 17) return 'teen_14_17';
    if (age >= 18 && age <= 64) return 'adult_18_64';
    return 'elderly_65_plus';
}

function getGoalKey(goal) {
    return goal || 'maintain_health';
}

function generateSleepRecommendations(age, goal) {
    const ageGroup = getAgeGroup(age);
    const sleepData = SLEEP_RECOMMENDATIONS[ageGroup];
    const source = HEALTH_SOURCES[sleepData.source];
    
    const recommendations = [];
    
    recommendations.push({
        title: `每日睡眠时长：${sleepData.min}-${sleepData.max}小时`,
        description: `根据您的年龄(${age}岁)，建议每日睡眠时长为${sleepData.min}至${sleepData.max}小时。充足的睡眠对于身体恢复、免疫系统功能和心理健康至关重要。`,
        source: `${source.name}`
    });

    recommendations.push({
        title: '建立规律的睡眠时间',
        description: '每天在同一时间上床睡觉和起床，即使是周末和节假日也要坚持。这有助于调节身体的生物钟。建议设定固定的睡前程序，如睡前1小时远离电子设备、阅读纸质书籍、进行放松练习。',
        source: `${source.name}`
    });

    recommendations.push({
        title: '优化睡眠环境',
        description: '保持卧室温度在18-22℃，保持黑暗和安静。使用窗帘遮挡光线，考虑使用耳塞或白噪音机。床垫、枕头应提供良好的支撑，建议每7-10年更换一次床垫。',
        source: `${source.name}`
    });

    if (goal === 'lose_weight') {
        recommendations.push({
            title: '睡眠与体重管理',
            description: '睡眠不足会影响食欲调节激素(瘦素和饥饿素)，导致食欲增加，尤其对高热量食物的渴望。研究表明，每晚睡眠少于6小时的人肥胖风险增加55%。',
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
            description: '中等强度运动包括快走、慢跑、游泳、骑行、跳舞等，每次持续30分钟以上。高强度运动包括跑步、快速游泳、HIIT训练等。可以将150分钟中等强度运动分配为每天30分钟，每周5天。',
            source: '世界卫生组织 (WHO)'
        });

        recommendations.push({
            title: '力量训练：每周2次全身训练',
            description: '进行针对主要肌群的力量训练，如举铁、俯卧撑、仰卧起坐、深蹲等。每次训练应包括8-12次重复，进行2-3组。力量训练有助于维持肌肉量、提高基础代谢率。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    } else if (age > 64) {
        recommendations.push({
            title: '老年人运动建议：每周至少150分钟中等强度有氧运动',
            description: '推荐低冲击运动如快走、太极、哑铃操、游泳。同时加入平衡训练和柔韧性训练，如瑜伽、拉伸，每周3次以上，以预防跌倒。',
            source: '世界卫生组织欧洲区域办事处'
        });
    }

    if (goal === 'lose_weight') {
        recommendations.push({
            title: '减肥运动策略：每日创造300-500千卡热量缺口',
            description: '结合有氧运动和力量训练。建议每周进行5-6次运动，其中3-4次有氧运动，2次力量训练。每次有氧运动持续45-60分钟。研究表明，结合运动的减肥计划比单纯节食更有效，且更易长期维持。',
            source: '美国疾病控制与预防中心 (CDC)'
        });

        recommendations.push({
            title: '高强度间歇训练(HIIT)：提高燃脂效率',
            description: 'HIIT训练可以在短时间内消耗大量热量，并在训练后持续燃脂。例如：冲刺跑30秒，慢走60秒，重复8-10次，每周1-2次。适合时间有限但希望高效燃脂的人群。',
            source: '哈佛医学院'
        });
    } else if (goal === 'gain_muscle') {
        recommendations.push({
            title: '增肌训练计划：每周3-4次力量训练',
            description: '采用渐进式超负荷原则，逐渐增加训练重量或次数。每次训练针对不同肌群，如胸肌、背部、腿部、肩部等。训练后摄入足够蛋白质以支持肌肉修复生长。',
            source: '哈佛医学院'
        });
    } else if (goal === 'maintain_shape') {
        recommendations.push({
            title: '维持身材运动方案',
            description: '保持每周3-4次运动，结合有氧运动和力量训练。建议加入功能性训练，如核心训练、柔韧性训练，提高身体协调性和姿态。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    }

    recommendations.push({
        title: '日常活动建议',
        description: '除了正式运动，增加日常活动量：每坐45-60分钟站立活动5分钟；用楼梯代替电梯；步行或骑行代替短途驾车；做家务如打扫、园艺等。目标是每日步数达到8000-10000步。',
        source: '世界卫生组织 (WHO)'
    });

    return recommendations;
}

function generateDietRecommendations(gender, age, weight, height, bmi, goal) {
    const recommendations = [];
    const bmiValue = parseFloat(bmi);

    let dailyCalories = 2000;
    if (gender === 'male') {
        dailyCalories = Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
    } else {
        dailyCalories = Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
    }

    recommendations.push({
        title: `每日热量摄入参考：${dailyCalories}千卡`,
        description: `这是您的基础代谢率估算值。实际需求会因活动量而异。久坐人群需增加10%，轻度活动增加20%，中度活动增加30%，高度活动增加50%以上。`,
        source: 'WHO营养司'
    });

    if (goal === 'lose_weight') {
        const targetCalories = dailyCalories - 500;
        recommendations.push({
            title: `减肥目标：每日摄入${targetCalories}千卡`,
            description: '通过每日减少500千卡热量摄入，每周可减重大约0.5公斤。这是WHO推荐的安全减重速度，避免过快减重导致肌肉流失和代谢下降。',
            source: '世界卫生组织 (WHO)'
        });
    } else if (goal === 'gain_muscle') {
        const targetCalories = dailyCalories + 300;
        recommendations.push({
            title: `增肌目标：每日摄入${targetCalories}千卡`,
            description: '增加热量摄入以支持肌肉生长，同时配合力量训练。建议分5-6餐摄入，确保每餐都有蛋白质来源。',
            source: '哈佛医学院'
        });
    }

    recommendations.push({
        title: '蛋白质摄入：每日1.2-1.6克/公斤体重',
        description: `根据您的体重(${weight}kg)，每日建议摄入${(weight * 1.2).toFixed(1)}-${(weight * 1.6).toFixed(1)}克蛋白质。优质蛋白质来源包括：鸡胸肉、鱼、虾、鸡蛋、低脂牛奶、豆腐、鹰嘴豆等。每餐应包含手掌心大小的蛋白质食物。`,
        source: '美国疾病控制与预防中心 (CDC)'
    });

    recommendations.push({
        title: '碳水化合物：选择复合碳水',
        description: '优先选择全谷物、糙米、燕麦、全麦面包、豆类等复合碳水化合物。避免精制碳水如白米饭、白面包、含糖饮料。复合碳水提供更持久的能量，且富含膳食纤维。',
        source: 'WHO营养司'
    });

    recommendations.push({
        title: '脂肪摄入：每日20-30%热量来自脂肪',
        description: '选择健康脂肪：橄榄油、牛油果、坚果、深海鱼油。限制饱和脂肪和反式脂肪摄入，如肥肉、油炸食品、加工肉类。每日烹调用油不超过25克。',
        source: '世界卫生组织 (WHO)'
    });

    recommendations.push({
        title: '蔬菜水果：每日5份以上',
        description: '蔬菜和水果富含维生素、矿物质和膳食纤维。建议每日摄入400克以上蔬菜和水果，深色蔬菜占一半以上。每餐应包含至少2种蔬菜。',
        source: '世界卫生组织 (WHO)'
    });

    recommendations.push({
        title: '饮水：每日1.5-2升',
        description: '保持充足饮水，有助于新陈代谢和身体功能。建议每天喝8杯水(约200ml/杯)。餐前半小时喝水可增加饱腹感。避免过量饮用含糖饮料。',
        source: '英国国家医疗服务体系 (NHS)'
    });

    if (bmiValue >= 24) {
        recommendations.push({
            title: '体重管理饮食策略',
            description: '控制总热量摄入，增加膳食纤维摄入，选择低能量密度食物。采用"餐盘法"：半盘蔬菜、四分之一蛋白质、四分之一主食。细嚼慢咽，每餐时间不少于20分钟。',
            source: '美国疾病控制与预防中心 (CDC)'
        });
    }

    recommendations.push({
        title: '饮食规律：定时定量，少食多餐',
        description: '保持规律三餐，避免长时间空腹。可在两餐之间添加健康零食，如水果、酸奶、坚果。晚餐建议在睡前3小时完成，避免影响睡眠。',
        source: 'WHO营养司'
    });

    return recommendations;
}

function renderMealPlan(goal) {
    const container = document.getElementById('mealPlanRecommendations');
    const goalKey = getGoalKey(goal);
    const mealPlan = MEAL_PLANS[goalKey] || MEAL_PLANS.maintain_health;
    
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const weekdayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    
    container.innerHTML = `
        <div class="meal-plan-container">
            <div class="weekday-tabs">
                ${weekdays.map((day, index) => `<div class="weekday-tab" data-day="${day}">${weekdayNames[index]}</div>`).join('')}
            </div>
            <div class="day-meals" id="dayMeals">
                ${renderDayMeals(mealPlan.monday)}
            </div>
        </div>
    `;

    const tabs = container.querySelectorAll('.weekday-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const day = tab.dataset.day;
            document.getElementById('dayMeals').innerHTML = renderDayMeals(mealPlan[day]);
        });
    });
    
    tabs[0].classList.add('active');
}

function renderDayMeals(dayPlan) {
    return `
        <div class="meal-block">
            <div class="meal-time">🌅 早餐</div>
            <div class="meal-content">
                ${dayPlan.breakfast.map(item => `<div class="meal-item">${item}</div>`).join('')}
            </div>
        </div>
        <div class="meal-block">
            <div class="meal-time">☀️ 午餐</div>
            <div class="meal-content">
                ${dayPlan.lunch.map(item => `<div class="meal-item">${item}</div>`).join('')}
            </div>
        </div>
        <div class="meal-block">
            <div class="meal-time">🍎 加餐</div>
            <div class="meal-content">
                ${dayPlan.snack.map(item => `<div class="meal-item">${item}</div>`).join('')}
            </div>
        </div>
        <div class="meal-block">
            <div class="meal-time">🌙 晚餐</div>
            <div class="meal-content">
                ${dayPlan.dinner.map(item => `<div class="meal-item">${item}</div>`).join('')}
            </div>
            <div class="meal-notes">💡 ${dayPlan.notes}</div>
        </div>
    `;
}

function renderRecommendations(containerId, recommendations) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.className = 'rec-item';
        item.innerHTML = `
            <div class="rec-title">${rec.title}</div>
            <div class="rec-desc">${rec.description}</div>
            <div class="rec-source">数据来源：${rec.source}</div>
        `;
        container.appendChild(item);
    });
}

function renderSources() {
    const sourcesList = document.getElementById('sourcesList');
    sourcesList.innerHTML = '';
    
    Object.values(HEALTH_SOURCES).forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${source.name}</strong> - <a href="${source.url}" target="_blank">${source.url}</a>`;
        sourcesList.appendChild(li);
    });
}

document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;

    const bmi = calculateBMI(weight, height);
    const bmiInfo = getBMICategory(parseFloat(bmi));

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = bmiInfo.category;
    document.getElementById('bmiCategory').style.backgroundColor = bmiInfo.color;

    const sleepRecs = generateSleepRecommendations(age, goal);
    const exerciseRecs = generateExerciseRecommendations(gender, age, bmi, goal);
    const dietRecs = generateDietRecommendations(gender, age, weight, height, bmi, goal);

    renderRecommendations('sleepRecommendations', sleepRecs);
    renderRecommendations('exerciseRecommendations', exerciseRecs);
    renderRecommendations('dietRecommendations', dietRecs);
    renderMealPlan(goal);
    renderSources();

    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
});