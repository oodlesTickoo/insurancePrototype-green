app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

    $scope.personalDetails = {};
    $scope.forms = {};
    $scope.grossAnnualIncome = 120000;
    $scope.grossAnnualIncomeNew = 120000;
    $scope.homeMortgage = 500000;
    $scope.investmentPropertyMortgage = 0;
    $scope.creditCardDebt = 2000;
    $scope.carLoan = 20000;
    $scope.personalLoan = 0;
    $scope.otherLoan = 0;
    $scope.homeValue = 800000;
    $scope.cashAtBank = 20000;
    $scope.otherInvestment = 20000;
    $scope.superBalance = 100000;
    $scope.ecLife = 250000;
    $scope.ecLifeNew = 250000;
    $scope.ecTPD = 0;
    $scope.ecTPDNew = 0;
    $scope.ecIP = 0;
    $scope.ecIPNew = 0;
    $scope.ecTrauma = 0;
    $scope.ecTraumaNew = 0;
    $scope.numChildren = 2;
    $scope.funeralCost = 20000;
    $scope.educationExpensePerYearPerChild = 5000;
    $scope.familyLivingCostPerYear = 90000;
    $scope.inflation = 2;
    $scope.rateOfReturn = 5;
    $scope.moneyToBeBorrowed = 400000;
    $scope.valueOfNewProperty = 500000;
    $scope.ageSpouse = 47;
    $scope.spouseSalary = 50000;
    $scope.ageChildren1 = 3;
    $scope.ageChildren2 = 5;
    $scope.ageChildren3 = 10;
    $scope.ageChildren4 = 10;
    $scope.ageChildren5 = 10;

    $scope.resultPerc = {};


    $scope.genderOption = true;
    $scope.smokeOption = false;
    $scope.spouseOption = true;
    $scope.spouseWorkOption = true;
    $scope.buyOption = true;

    $scope.sickLeaves = 10;

    $scope.calculateWaitingPeriod = function(leaves) {
        if (leaves <= 30) {
            return 30;
        }
        if (leaves > 30 && leaves <= 60) {
            return 60;
        }
        if (leaves > 60) {
            return 90;
        }
    }

    $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $scope.forms = {};

    $scope.personalDetails = {
        firstName: "Amit",
        lastName: "Kumar",
        email: "iamitkrs@gmail.com",
        mobile: 412121212,
        postalCode: 1234
    };

    var d = document.getElementsByClassName('title-div');

    $scope.chartOneOpen = true;
    $scope.chartTwoOpen = false;
    $scope.chartThreeOpen = false;
    $scope.chartFourOpen = false;
    $scope.needSS = true;

    $scope.isMenuDrop1 = false;
    $scope.isMenuDrop2 = true;

    $scope.menuDrop1 = function() {
        $scope.isMenuDrop2 = $scope.isMenuDrop1 ? true : true;
        $scope.isMenuDrop1 = $scope.isMenuDrop1 ? false : true;
    }
    $scope.menuDrop2 = function() {
        $scope.isMenuDrop1 = $scope.isMenuDrop1 ? true : true;
        $scope.isMenuDrop2 = $scope.isMenuDrop2 ? false : true;
    }


    $(".form-1").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {

        if ($scope.isMenuDrop1) {
            d[0].style.backgroundColor = "#81ba34";
            document.getElementsByClassName('caret1-down')[0].style.display = 'none';
            document.getElementsByClassName('caret1-right')[0].style.display = 'block';
        } else {
            // console.log("super");
            d[0].style.backgroundColor = "#c8e0ac";
            document.getElementsByClassName('caret1-down')[0].style.display = 'block';
            document.getElementsByClassName('caret1-right')[0].style.display = 'none';
        }
    });

    $(".form-2").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop2) {
            d[1].style.backgroundColor = "#eaab00";
            document.getElementsByClassName('caret2-down')[0].style.display = 'none';
            document.getElementsByClassName('caret2-right')[0].style.display = 'block';
        } else {
            // console.log("super1");
            d[1].style.backgroundColor = "#f9e6b3";
            document.getElementsByClassName('caret2-down')[0].style.display = 'block';
            document.getElementsByClassName('caret2-right')[0].style.display = 'none';
        }
    });

    var initDate = new Date();
    initDate.setYear(1967);
    initDate.setMonth(6);
    initDate.setDate(1);
    $scope.dob = initDate;

    $scope.infoShow = function(value) {
        if (value) {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
            document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
            document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
            document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
        } else {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
        }
    }

    $scope.firstDP = function() {
        $scope.dateOptions.maxDate = new Date($scope.fy - 18, 5, 30);
        $scope.dateOptions.minDate = new Date(1950, 0, 1);
    }

    $scope.secondDp = function() {
        delete $scope.dateOptions.maxDate;
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
        $scope.firstDP();
    };

    $scope.open2 = function() {
        $scope.secondDp();
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy', 'd!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    var dt = new Date();

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;

    $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);


    $scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        // console.log("dobText",new Date(dobText.value));
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
    }

    $scope.newChangesApplied = false;

    $scope.enableNewSliders = true;

    $scope.saveWithNew = false;

    $scope.showPensionOption = true;
    $scope.showPensionOptionSpouse = true;

    $('#select-spouse-option').on('changed.bs.select', function(e) {
        $scope.spouseOption = $(this).selectpicker('val') <= 0;
        // console.log("spouse option set to", $scope.spouseOption);
        $timeout(0);
    });

    $('#select-spouseWork-option').on('changed.bs.select', function(e) {
        $scope.spouseWorkOption = $(this).selectpicker('val') <= 0;
        // console.log("house option set to", $scope.houseOption);
        $timeout(0);
    });

    $('#select-buy-option').on('changed.bs.select', function(e) {
        $scope.buyOption = $(this).selectpicker('val') <= 0;
        // console.log("choose pension option set to", $scope.showPensionOption);
        $timeout(0);
    });

    var grossAnnualIncomeSlider = document.getElementById('grossAnnualIncomeSlider'),
        grossAnnualIncomeSliderNew = document.getElementById('grossAnnualIncomeSliderNew'),
        homeMortgageSlider = document.getElementById('homeMortgageSlider'),
        investmentPropertyMortgageSlider = document.getElementById('investmentPropertyMortgageSlider'),
        creditCardDebtSlider = document.getElementById('creditCardDebtSlider'),
        carLoanSlider = document.getElementById('carLoanSlider'),
        personalLoanSlider = document.getElementById('personalLoanSlider'),
        otherLoanSlider = document.getElementById('otherLoanSlider'),
        homeValueSlider = document.getElementById('homeValueSlider'),
        cashAtBankSlider = document.getElementById('cashAtBankSlider'),
        otherInvestmentSlider = document.getElementById('otherInvestmentSlider'),
        superBalanceSlider = document.getElementById('superBalanceSlider'),
        ecLifeSlider = document.getElementById('ecLifeSlider'),
        ecLifeSliderNew = document.getElementById('ecLifeSliderNew'),
        ecTPDSlider = document.getElementById('ecTPDSlider'),
        ecTPDSliderNew = document.getElementById('ecTPDSliderNew'),
        ecIPSlider = document.getElementById('ecIPSlider'),
        ecIPSliderNew = document.getElementById('ecIPSliderNew'),
        ecTraumaSlider = document.getElementById('ecTraumaSlider'),
        ecTraumaSliderNew = document.getElementById('ecTraumaSliderNew'),
        numChildrenSlider = document.getElementById('numChildrenSlider'),
        funeralCostSlider = document.getElementById('funeralCostSlider'),
        educationExpensePerYearPerChildSlider = document.getElementById('educationExpensePerYearPerChildSlider'),
        familyLivingCostPerYearSlider = document.getElementById('familyLivingCostPerYearSlider'),
        inflationSlider = document.getElementById('inflationSlider'),
        rateOfReturnSlider = document.getElementById('rateOfReturnSlider');
    valueOfNewPropertySlider = document.getElementById('valueOfNewPropertySlider'),
        moneyToBeBorrowedSlider = document.getElementById('moneyToBeBorrowedSlider');
    ageSpouseSlider = document.getElementById('ageSpouseSlider');
    spouseSalarySlider = document.getElementById('spouseSalarySlider');
    ageChildren1Slider = document.getElementById('ageChildren1Slider');
    ageChildren2Slider = document.getElementById('ageChildren2Slider');
    ageChildren3Slider = document.getElementById('ageChildren3Slider');
    ageChildren4Slider = document.getElementById('ageChildren4Slider');
    ageChildren5Slider = document.getElementById('ageChildren5Slider');
    //connect: [false, false]

    noUiSlider.create(grossAnnualIncomeSlider, {
        start: [$scope.grossAnnualIncome],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(grossAnnualIncomeSliderNew, {
        start: [$scope.grossAnnualIncomeNew],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(homeMortgageSlider, {
        start: [$scope.homeMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(investmentPropertyMortgageSlider, {
        start: [$scope.investmentPropertyMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(personalLoanSlider, {
        start: [$scope.personalLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(creditCardDebtSlider, {
        start: [$scope.creditCardDebt],
        range: {
            'min': [0],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(carLoanSlider, {
        start: [$scope.carLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(otherLoanSlider, {
        start: [$scope.otherLoan],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });


    noUiSlider.create(homeValueSlider, {
        start: [$scope.homeValue],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(cashAtBankSlider, {
        start: [$scope.cashAtBank],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(otherInvestmentSlider, {
        start: [$scope.otherInvestment],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(superBalanceSlider, {
        start: [$scope.superBalance],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecLifeSlider, {
        start: [$scope.ecLife],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecLifeSliderNew, {
        start: [$scope.ecLifeNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTPDSlider, {
        start: [$scope.ecTPD],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTPDSliderNew, {
        start: [$scope.ecTPDNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecIPSlider, {
        start: [$scope.ecIP],
        range: {
            'min': [0],
            'max': [50000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecIPSliderNew, {
        start: [$scope.ecIPNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTraumaSlider, {
        start: [$scope.ecTrauma],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ecTraumaSliderNew, {
        start: [$scope.ecTraumaNew],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: [false, false]
    });

    noUiSlider.create(numChildrenSlider, {
        start: [$scope.numChildren],
        range: {
            'min': [0],
            'max': [5]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });

    noUiSlider.create(sickLeavesSlider, {
        start: [$scope.sickLeaves],
        range: {
            'min': [1],
            'max': [365]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: [false, false]
    });

    noUiSlider.create(funeralCostSlider, {
        start: [$scope.funeralCost],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(educationExpensePerYearPerChildSlider, {
        start: [$scope.educationExpensePerYearPerChild],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(familyLivingCostPerYearSlider, {
        start: [$scope.familyLivingCostPerYear],
        range: {
            'min': [0],
            'max': [500000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(inflationSlider, {
        start: [$scope.inflation],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });

    noUiSlider.create(rateOfReturnSlider, {
        start: [$scope.rateOfReturn],
        range: {
            'min': [0],
            'max': [50]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: [false, false]
    });

    noUiSlider.create(valueOfNewPropertySlider, {
        start: [$scope.valueOfNewProperty],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(moneyToBeBorrowedSlider, {
        start: [$scope.moneyToBeBorrowed],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ageSpouseSlider, {
        start: [$scope.ageSpouse],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });

    noUiSlider.create(spouseSalarySlider, {
        start: [$scope.spouseSalary],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: [false, false]
    });

    noUiSlider.create(ageChildren1Slider, {
        start: [$scope.ageChildren1],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren2Slider, {
        start: [$scope.ageChildren2],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren3Slider, {
        start: [$scope.ageChildren3],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren4Slider, {
        start: [$scope.ageChildren4],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });
    noUiSlider.create(ageChildren5Slider, {
        start: [$scope.ageChildren5],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: [false, false]
    });


    var ageInput = document.getElementById('ageInput'),
        grossAnnualIncomeInput = document.getElementById('grossAnnualIncomeInput'),
        grossAnnualIncomeInputNew = document.getElementById('grossAnnualIncomeInputNew'),
        homeMortgageInput = document.getElementById('homeMortgageInput'),
        investmentPropertyMortgageInput = document.getElementById('investmentPropertyMortgageInput'),
        creditCardDebtInput = document.getElementById('creditCardDebtInput'),
        carLoanInput = document.getElementById('carLoanInput'),
        personalLoanInput = document.getElementById('personalLoanInput'),
        otherLoanInput = document.getElementById('otherLoanInput'),
        homeValueInput = document.getElementById('homeValueInput'),
        cashAtBankInput = document.getElementById('cashAtBankInput'),
        otherInvestmentInput = document.getElementById('otherInvestmentInput'),
        superBalanceInput = document.getElementById('superBalanceInput'),
        ecLifeInput = document.getElementById('ecLifeInput'),
        ecLifeInputNew = document.getElementById('ecLifeInputNew'),
        ecTPDInput = document.getElementById('ecTPDInput'),
        ecTPDInputNew = document.getElementById('ecTPDInputNew'),
        ecIPInput = document.getElementById('ecIPInput'),
        ecIPInputNew = document.getElementById('ecIPInputNew'),
        ecTraumaInput = document.getElementById('ecTraumaInput'),
        ecTraumaInputNew = document.getElementById('ecTraumaInputNew'),
        numChildrenInput = document.getElementById('numChildrenInput'),
        funeralCostInput = document.getElementById('funeralCostInput'),
        educationExpensePerYearPerChildInput = document.getElementById('educationExpensePerYearPerChildInput'),
        familyLivingCostPerYearInput = document.getElementById('familyLivingCostPerYearInput'),
        inflationInput = document.getElementById('inflationInput'),
        rateOfReturnInput = document.getElementById('rateOfReturnInput');
    valueOfNewPropertyInput = document.getElementById('valueOfNewPropertyInput'),
        moneyToBeBorrowedInput = document.getElementById('moneyToBeBorrowedInput'),
        ageSpouseInput = document.getElementById('ageSpouseInput'),
        spouseSalaryInput = document.getElementById('spouseSalaryInput');
    ageChildren1Input = document.getElementById('ageChildren1Input'),
        ageChildren2Input = document.getElementById('ageChildren2Input'),
        ageChildren3Input = document.getElementById('ageChildren3Input'),
        ageChildren4Input = document.getElementById('ageChildren4Input'),
        ageChildren5Input = document.getElementById('ageChildren5Input'),
        ageChildren6Input = document.getElementById('ageChildren6Input'),
        ageChildren7Input = document.getElementById('ageChildren7Input'),
        ageChildren8Input = document.getElementById('ageChildren8Input'),
        sickLeavesInput = document.getElementById('sickLeavesInput');

    sickLeavesInput.addEventListener("change", function() {
        sickLeavesSlider.noUiSlider.set($scope.sickLeaves);
    });

    inflationInput.addEventListener("change", function() {
        inflationSlider.noUiSlider.set($scope.inflation);
    });

    rateOfReturnInput.addEventListener("change", function() {
        rateOfReturnSlider.noUiSlider.set($scope.rateOfReturn);
    });

    valueOfNewPropertyInput.addEventListener("change", function() {
        valueOfNewPropertySlider.noUiSlider.set($scope.valueOfNewProperty);
    });

    moneyToBeBorrowedInput.addEventListener("change", function() {
        moneyToBeBorrowedSlider.noUiSlider.set($scope.moneyToBeBorrowed);
    });

    ageSpouseInput.addEventListener("change", function() {
        ageSpouseSlider.noUiSlider.set($scope.ageSpouse);
    });

    spouseSalaryInput.addEventListener("change", function() {
        spouseSalarySlider.noUiSlider.set($scope.spouseSalary);
    });

    ageChildren1Input.addEventListener("change", function() {
        ageChildren1Slider.noUiSlider.set($scope.ageChildren1);
    });

    ageChildren2Input.addEventListener("change", function() {
        ageChildren2Slider.noUiSlider.set($scope.ageChildren2);
    });

    ageChildren3Input.addEventListener("change", function() {
        ageChildren3Slider.noUiSlider.set($scope.ageChildren3);
    });

    ageChildren4Input.addEventListener("change", function() {
        ageChildren4Slider.noUiSlider.set($scope.ageChildren4);
    });

    ageChildren5Input.addEventListener("change", function() {
        ageChildren5Slider.noUiSlider.set($scope.ageChildren5);
    });

    homeMortgageInput.addEventListener("change", function() {
        homeMortgageSlider.noUiSlider.set($scope.homeMortgage);
    });

    investmentPropertyMortgageInput.addEventListener("change", function() {
        investmentPropertyMortgageSlider.noUiSlider.set($scope.investmentPropertyMortgage);
    });

    creditCardDebtInput.addEventListener("change", function() {
        creditCardDebtSlider.noUiSlider.set($scope.creditCardDebt);
    });

    carLoanInput.addEventListener("change", function() {
        carLoanSlider.noUiSlider.set($scope.carLoan);
    });

    personalLoanInput.addEventListener("change", function() {
        personalLoanSlider.noUiSlider.set($scope.personalLoan);
    });

    otherLoanInput.addEventListener("change", function() {
        otherLoanSlider.noUiSlider.set($scope.otherLoan);
    });

    homeValueInput.addEventListener("change", function() {
        homeValueSlider.noUiSlider.set($scope.homeValue);
    });

    cashAtBankInput.addEventListener("change", function() {
        cashAtBankSlider.noUiSlider.set($scope.cashAtBank);
    });

    otherInvestmentInput.addEventListener("change", function() {
        otherInvestmentSlider.noUiSlider.set($scope.otherInvestment);
    });

    superBalanceInput.addEventListener("change", function() {
        superBalanceSlider.noUiSlider.set($scope.superBalance);
    });

    ecLifeInput.addEventListener("change", function() {
        ecLifeSlider.noUiSlider.set($scope.ecLife);
    });

    ecLifeInputNew.addEventListener("change", function() {
        ecLifeSliderNew.noUiSlider.set($scope.ecLifeNew);
    });

    ecTPDInput.addEventListener("change", function() {
        ecTPDSlider.noUiSlider.set($scope.ecTPD);
    });

    ecTPDInputNew.addEventListener("change", function() {
        ecTPDSliderNew.noUiSlider.set($scope.ecTPDNew);
    });

    ecIPInput.addEventListener("change", function() {
        ecIPSlider.noUiSlider.set($scope.ecIP);
    });

    ecIPInputNew.addEventListener("change", function() {
        ecIPSliderNew.noUiSlider.set($scope.ecIPNew);
    });

    ecTraumaInput.addEventListener("change", function() {
        ecTraumaSlider.noUiSlider.set($scope.ecTrauma);
    });

    ecTraumaInputNew.addEventListener("change", function() {
        ecTraumaSliderNew.noUiSlider.set($scope.ecTraumaNew);
    });

    funeralCostInput.addEventListener("change", function() {
        funeralCostSlider.noUiSlider.set($scope.funeralCost);
    });

    educationExpensePerYearPerChildInput.addEventListener("change", function() {
        educationExpensePerYearPerChildSlider.noUiSlider.set($scope.educationExpensePerYearPerChild);
    });

    familyLivingCostPerYearInput.addEventListener("change", function() {
        familyLivingCostPerYearSlider.noUiSlider.set($scope.familyLivingCostPerYear);
    });

    grossAnnualIncomeInput.addEventListener("change", function() {
        grossAnnualIncomeSlider.noUiSlider.set($scope.grossAnnualIncome);
    });

    grossAnnualIncomeInputNew.addEventListener("change", function() {
        grossAnnualIncomeSliderNew.noUiSlider.set($scope.grossAnnualIncomeNew);
    });

    function noChildren(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 5; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
        }
    }

    grossAnnualIncomeSlider.noUiSlider.on('update', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
    });

    grossAnnualIncomeSliderNew.noUiSlider.on('update', function(values, handle) {
        grossAnnualIncomeInputNew.value = values[handle];
        $scope.grossAnnualIncomeNew = (values[handle]);
    });


    sickLeavesSlider.noUiSlider.on('update', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
    });

    homeMortgageSlider.noUiSlider.on('update', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('update', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
    });

    creditCardDebtSlider.noUiSlider.on('update', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
    });

    carLoanSlider.noUiSlider.on('update', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
    });

    personalLoanSlider.noUiSlider.on('update', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
    });

    otherLoanSlider.noUiSlider.on('update', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
    });

    homeValueSlider.noUiSlider.on('update', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
    });

    cashAtBankSlider.noUiSlider.on('update', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
    });

    otherInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
    });

    superBalanceSlider.noUiSlider.on('update', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
    });

    ecLifeSlider.noUiSlider.on('update', function(values, handle) {
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
    });

    ecLifeSliderNew.noUiSlider.on('update', function(values, handle) {
        ecLifeInputNew.value = values[handle];
        $scope.ecLifeNew = (values[handle]);
    });

    ecTPDSlider.noUiSlider.on('update', function(values, handle) {
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
    });

    ecTPDSliderNew.noUiSlider.on('update', function(values, handle) {
        ecTPDInputNew.value = values[handle];
        $scope.ecTPDNew = (values[handle]);
    });

    ecIPSlider.noUiSlider.on('update', function(values, handle) {
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
    });

    ecIPSliderNew.noUiSlider.on('update', function(values, handle) {
        ecIPInputNew.value = values[handle];
        $scope.ecIPNew = (values[handle]);
    });

    ecTraumaSlider.noUiSlider.on('update', function(values, handle) {
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
    });

    ecTraumaSliderNew.noUiSlider.on('update', function(values, handle) {
        ecTraumaInputNew.value = values[handle];
        $scope.ecTraumaNew = (values[handle]);
    });

    numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        noChildren($scope.numChildren);
    });


    funeralCostSlider.noUiSlider.on('update', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('update', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('update', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
    });

    inflationSlider.noUiSlider.on('update', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
    });

    rateOfReturnSlider.noUiSlider.on('update', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
    });

    valueOfNewPropertySlider.noUiSlider.on('update', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('update', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
    });

    ageSpouseSlider.noUiSlider.on('update', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
    });

    spouseSalarySlider.noUiSlider.on('update', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
    });

    ageChildren1Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
    });
    ageChildren2Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
    });
    ageChildren3Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
    });
    ageChildren4Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
    });
    ageChildren5Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set($scope.numChildren);
        noChildren($scope.numChildren);
    })


    grossAnnualIncomeSlider.noUiSlider.on('set', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    grossAnnualIncomeSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
        grossAnnualIncomeSliderNew.noUiSlider.set($scope.grossAnnualIncome);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    grossAnnualIncomeSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        grossAnnualIncomeInputNew.value = values[handle];
        $scope.grossAnnualIncomeNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });


    sickLeavesSlider.noUiSlider.on('set', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
        $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);
        //calculateFinal();
        $timeout(0);
    });

    homeMortgageSlider.noUiSlider.on('set', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('set', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    creditCardDebtSlider.noUiSlider.on('set', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    carLoanSlider.noUiSlider.on('set', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    personalLoanSlider.noUiSlider.on('set', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    otherLoanSlider.noUiSlider.on('set', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    homeValueSlider.noUiSlider.on('set', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    cashAtBankSlider.noUiSlider.on('set', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    otherInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    superBalanceSlider.noUiSlider.on('set', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ecLifeSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
        ecLifeSliderNew.noUiSlider.set($scope.ecLife);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecLifeSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecLifeInputNew.value = values[handle];
        $scope.ecLifeNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecTPDSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
        ecTPDSliderNew.noUiSlider.set($scope.ecTPD);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecTPDSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecTPDInputNew.value = values[handle];
        $scope.ecTPDNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecIPSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
        ecIPSliderNew.noUiSlider.set($scope.ecIP);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecIPSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecIPInputNew.value = values[handle];
        $scope.ecIPNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    ecTraumaSlider.noUiSlider.on('set', function(values, handle) {
        $scope.enableNewSliders = false;
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
        ecTraumaSliderNew.noUiSlider.set($scope.ecTrauma);
        $scope.enableNewSliders = true;
        $timeout(0);
    });

    ecTraumaSliderNew.noUiSlider.on('set', function(values, handle) {
        $scope.saveWithNew = true;
        $scope.newChangesApplied = true;
        ecTraumaInputNew.value = values[handle];
        $scope.ecTraumaNew = (values[handle]);
        if ($scope.enableNewSliders) {
            $scope.calculateFinal(true, false);
        }
        $timeout(0);
        $scope.newChangesApplied = false;
    });

    numChildrenSlider.noUiSlider.on('set', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    funeralCostSlider.noUiSlider.on('set', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('set', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('set', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    inflationSlider.noUiSlider.on('set', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    rateOfReturnSlider.noUiSlider.on('set', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    valueOfNewPropertySlider.noUiSlider.on('set', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('set', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ageSpouseSlider.noUiSlider.on('set', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    spouseSalarySlider.noUiSlider.on('set', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    ageChildren1Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren2Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren3Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren4Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren5Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    var grossAnnualIncome1, homeMortgage1, investmentPropertyMortgage1, creditCardDebt1, carLoan1, personalLoan1,
        otherLoan1, homeValue1, cashAtBank1, otherInvestment1, superBalance1, ecLife1, ecTPD1, ecIP1, ecTrauma1,
        funeralCost1, educationExpensePerYearPerChild1, familyLivingCostPerYear1, inflation1, rateOfReturn1,
        moneyToBeBorrowed1, valueOfNewProperty1, spouseSalary1;


    $scope.calculateFinal = function(isValid, closeInputs) {

        if (isValid) {

            if (closeInputs) {
                document.getElementById("inputs").style.display = "none";
                // $("#results").animate({height: 'toggle'},1500);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                document.getElementById("results").style.display = "block";
            }


            grossAnnualIncome1 = $scope.newChangesApplied ? Number($scope.grossAnnualIncomeNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.grossAnnualIncome.replaceAll("$", "").replaceAll(",", ""));
            homeMortgage1 = Number($scope.homeMortgage.replaceAll("$", "").replaceAll(",", ""));
            investmentPropertyMortgage1 = Number($scope.investmentPropertyMortgage.replaceAll("$", "").replaceAll(",", ""));
            creditCardDebt1 = Number($scope.creditCardDebt.replaceAll("$", "").replaceAll(",", ""));
            carLoan1 = Number($scope.carLoan.replaceAll("$", "").replaceAll(",", ""));
            personalLoan1 = Number($scope.personalLoan.replaceAll("$", "").replaceAll(",", ""));
            otherLoan1 = Number($scope.otherLoan.replaceAll("$", "").replaceAll(",", ""));
            homeValue1 = Number($scope.homeValue.replaceAll("$", "").replaceAll(",", ""));
            cashAtBank1 = Number($scope.cashAtBank.replaceAll("$", "").replaceAll(",", ""));
            otherInvestment1 = Number($scope.otherInvestment.replaceAll("$", "").replaceAll(",", ""));
            superBalance1 = Number($scope.superBalance.replaceAll("$", "").replaceAll(",", ""));
            ecLife1 = $scope.newChangesApplied ? Number($scope.ecLifeNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecLife.replaceAll("$", "").replaceAll(",", ""));
            ecTPD1 = $scope.newChangesApplied ? Number($scope.ecTPDNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecTPD.replaceAll("$", "").replaceAll(",", ""));
            ecIP1 = $scope.newChangesApplied ? Number($scope.ecIPNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecIP.replaceAll("$", "").replaceAll(",", ""));
            ecTrauma1 = $scope.newChangesApplied ? Number($scope.ecTraumaNew.replaceAll("$", "").replaceAll(",", "")) : Number($scope.ecTrauma.replaceAll("$", "").replaceAll(",", ""));
            funeralCost1 = Number($scope.funeralCost.replaceAll("$", "").replaceAll(",", ""));
            educationExpensePerYearPerChild1 = Number($scope.educationExpensePerYearPerChild.replaceAll("$", "").replaceAll(",", ""));
            familyLivingCostPerYear1 = Number($scope.familyLivingCostPerYear.replaceAll("$", "").replaceAll(",", ""));
            inflation1 = Number($scope.inflation.replaceAll("%", "").replaceAll(",", ""));
            rateOfReturn1 = Number($scope.rateOfReturn.replaceAll("%", "").replaceAll(",", ""));
            moneyToBeBorrowed1 = Number($scope.moneyToBeBorrowed.replaceAll("$", "").replaceAll(",", ""));
            valueOfNewProperty1 = Number($scope.valueOfNewProperty.replaceAll("$", "").replaceAll(",", ""));
            spouseSalary1 = Number($scope.spouseSalary.replaceAll("$", "").replaceAll(",", ""));

            $scope.ecL = ecLife1;
            $scope.ecT = ecTPD1;
            $scope.ecI = ecIP1;
            $scope.ecTr = ecTrauma1;

            function PV(rate, periods, payment, future, type) {
                // Initialize type
                var type = (typeof type === 'undefined') ? 0 : type;

                // Evaluate rate and periods (TODO: repersonalLoanace with secure expression evaluator)
                rate = eval(rate);
                periods = eval(periods);

                // Return present value
                if (rate === 0) {
                    return -payment * periods - future;
                } else {
                    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
                }
            }

            var PVExpenseSpouse;
            $scope.realRateOfReturn = (1 + (rateOfReturn1 / 100)) / (1 + (inflation1 / 100)) - 1;


            if (!$scope.spouseOption) {
                PVExpenseSpouse = 0;
            } else {
                if (!$scope.spouseWorkOption) {
                    PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1, 0, 0));
                } else {
                    PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1 - spouseSalary1, 0, 0));
                }
            }
            //PVExpenseSpouse=1243994.6;
            console.log("PVExpenseSpouse", PVExpenseSpouse);
            var PVExpenseChildren = 0;
            var ageChild = [$scope.ageChildren1, $scope.ageChildren2, $scope.ageChildren3, $scope.ageChildren4, $scope.ageChildren5]

            if ($scope.numChildren == 0) {
                PVExpenseChildren = 0;
            } else {

                for (var i = 0; i < $scope.numChildren; i++) {
                    var temp = Math.abs(PV($scope.realRateOfReturn, 25 - ageChild[i], educationExpensePerYearPerChild1, 0, 0));

                    PVExpenseChildren = PVExpenseChildren + temp;
                }
            }
            // PVExpenseChildren=80156.1983032635+74793.54924005;
            console.log("PVExpenseChildren", PVExpenseChildren);

            $scope.D34 = Math.pow(1 + rateOfReturn1 / 100, Number((100 / 1200).toFixed(2))) - 1;
            $scope.saleProceeds = homeValue1 - homeMortgage1;


            //ScenarioOneInputs
            var sAssets = cashAtBank1 + otherInvestment1 + superBalance1;
            var sLiability = homeMortgage1 + investmentPropertyMortgage1 + creditCardDebt1 +
                carLoan1 + personalLoan1 + otherLoan1;
            var PVExpenseLife = PVExpenseSpouse + PVExpenseChildren + funeralCost1;
            var PVExpenseTPD = PVExpenseLife - funeralCost1;
            var IP1 = Number(((grossAnnualIncome1 * 0.75) / 12).toFixed(2));
            var IP2 = Math.abs(PV($scope.D34, (65 - $scope.age) * 12, IP1, 0, 0));
            var Trauma1 = 225000;
            var Trauma2 = Math.abs(PV($scope.D34, 24, 0.25 * grossAnnualIncome1 / 12, 0, 0));

            $scope.resultS1 = calculateResult(sAssets, sLiability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);


            //ScenarioTwo
            var additionalAssets;
            if (moneyToBeBorrowed1 + $scope.saleProceeds > valueOfNewProperty1) {
                additionalAssets = moneyToBeBorrowed1 + $scope.saleProceeds - valueOfNewProperty1;
            } else {
                additionalAssets = 0;
            }
            var s2Assets = cashAtBank1 + otherInvestment1 + superBalance1 + additionalAssets;
            var s2Liability = investmentPropertyMortgage1 + creditCardDebt1 +
                carLoan1 + personalLoan1 + otherLoan1 + moneyToBeBorrowed1;
            var PVExpenseLife2 = PVExpenseSpouse + PVExpenseChildren;
            var PVExpenseTPD2 = PVExpenseLife2;

            $scope.resultS2 = calculateResult(s2Assets, s2Liability, PVExpenseLife2, PVExpenseTPD2, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);

            function calculateResult(asset, liability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife, ecTPD, ecIP, ecTrauma) {
                var requiredLifeCover = PVExpenseLife + liability - asset;
                var requiredTPDCover = PVExpenseTPD + liability - asset - IP2;
                var requiredIPCover = IP1;
                var requiredTraumaCover = Trauma1 + Trauma2;
                return {
                    life: requiredLifeCover,
                    TPD: requiredTPDCover,
                    IP: requiredIPCover,
                    trauma: requiredTraumaCover,
                    waiting: 30
                };
            };
            console.log("Result 1", $scope.resultS1);
            console.log("Result 2", $scope.resultS2);

            $scope.resultTemp = $scope.buyOption ? $scope.resultS2 : $scope.resultS1;

            $scope.needLife1 = $scope.resultS1.life >= ecLife1 ? true : false;

            $scope.needLife2 = $scope.resultS2.life >= ecLife1 ? true : false;

            $scope.sfLife1 = Math.abs($scope.resultS1.life - ecLife1);

            $scope.sfLife2 = Math.abs($scope.resultS2.life - ecLife1);

            $scope.needTPD1 = $scope.resultS1.TPD >= ecTPD1 ? true : false;

            $scope.needTPD2 = $scope.resultS2.TPD >= ecTPD1 ? true : false;

            $scope.sfTPD1 = Math.abs($scope.resultS1.TPD - ecTPD1);

            $scope.sfTPD2 = Math.abs($scope.resultS2.TPD - ecTPD1);

            $scope.needIP1 = $scope.resultS1.IP >= ecIP1 ? true : false;

            $scope.needIP2 = $scope.resultS2.IP >= ecIP1 ? true : false;

            $scope.sfIP1 = Math.abs($scope.resultS1.IP - ecIP1);

            $scope.sfIP2 = Math.abs($scope.resultS2.IP - ecIP1);

            $scope.needTrauma1 = $scope.resultS1.trauma >= ecTrauma1 ? true : false;

            $scope.needTrauma2 = $scope.resultS2.trauma >= ecTrauma1 ? true : false;

            $scope.sfTrauma1 = Math.abs($scope.resultS1.trauma - ecTrauma1);

            $scope.sfTrauma2 = Math.abs($scope.resultS2.trauma - ecTrauma1);

            $scope.resultPerc.perc = 0;
            $scope.resultPerc.diff = 0;
            $scope.resultPerc.target = 0;
            $scope.resultPerc.achieved = 0;


            //$scope.resultPerc.achieved = $scope.ecL + $scope.ecT + $scope.ecI + $scope.ecTr;

            // $scope.resultPerc.achieved = $scope.resultPerc.achieved.toFixed(0);


            if ($scope.buyOption) {
                ChartServiceHc.createChart('#containerB', 'Death Cover', ecLife1, $scope.resultS1.life, $scope.resultS2.life, false, true);
                ChartServiceHc.createChart('#containerB2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, $scope.resultS2.TPD, false, true);
                ChartServiceHc.createChart('#containerB3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, $scope.resultS2.IP, false, true);
                ChartServiceHc.createChart('#containerB4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, $scope.resultS2.trauma, false, true);

                //$scope.resultPerc.target = $scope.resultS2.life + $scope.resultS2.TPD + $scope.resultS2.IP + $scope.resultS2.trauma;

                $scope.tempResult = $scope.resultS2;
                $timeout(0);
            } else {
                ChartServiceHc.createChart('#containerB', 'Death Cover', ecLife1, $scope.resultS1.life, {}, false, false);
                ChartServiceHc.createChart('#containerB2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, {}, false, false);
                ChartServiceHc.createChart('#containerB3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, {}, false, false);
                ChartServiceHc.createChart('#containerB4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, {}, false, false);

                //$scope.resultPerc.target = $scope.resultS1.life + $scope.resultS1.TPD + $scope.resultS1.IP + $scope.resultS1.trauma;
                
                $scope.tempResult = $scope.resultS1;
                $timeout(0);
            }

            if ($scope.ecL > $scope.tempResult.life) {
                $scope.resultPerc.diffLife = $scope.ecL - $scope.tempResult.life;
                $scope.resultPerc.percLife = 100;
                $scope.surplusOptionLife = true;
            } else {
                $scope.resultPerc.diffLife = $scope.tempResult.life - $scope.ecL;
                $scope.resultPerc.percLife = 100 - (($scope.resultPerc.diffLife / $scope.tempResult.life) * 100);
                $scope.resultPerc.percLife = $scope.resultPerc.percLife.toFixed(0);
                $scope.surplusOptionLife = false;
            }
            if ($scope.ecT > $scope.tempResult.TPD) {
                $scope.resultPerc.diffTPD = $scope.ecT - $scope.tempResult.TPD;
                $scope.resultPerc.percTPD = 100;
                $scope.surplusOptionTPD = true;
            } else {
                $scope.resultPerc.diffTPD = $scope.tempResult.TPD - $scope.ecT;
                $scope.resultPerc.percTPD = 100 - (($scope.resultPerc.diffTPD / $scope.tempResult.TPD) * 100);
                $scope.resultPerc.percTPD = $scope.resultPerc.percTPD.toFixed(0);
                $scope.surplusOptionTPD = false;
            }
            if ($scope.ecI > $scope.tempResult.IP) {
                $scope.resultPerc.diffIP = $scope.ecI - $scope.tempResult.IP;
                $scope.resultPerc.percIP = 100;
                $scope.surplusOptionIP = true;
            } else {
                $scope.resultPerc.diffIP = $scope.tempResult.IP - $scope.ecI;
                $scope.resultPerc.percIP = 100 - (($scope.resultPerc.diffIP / $scope.tempResult.IP) * 100);
                $scope.resultPerc.percIP = $scope.resultPerc.percIP.toFixed(0);
                $scope.surplusOptionIP = false;
            }
            if ($scope.ecTr > $scope.tempResult.trauma) {
                $scope.resultPerc.diffTrauma = $scope.ecTr - $scope.tempResult.trauma;
                $scope.resultPerc.percTrauma = 100;
                $scope.surplusOptionTrauma = true;
            } else {
                $scope.resultPerc.diffTrauma = $scope.tempResult.trauma - $scope.ecTr;
                $scope.resultPerc.percTrauma = 100 - (($scope.resultPerc.diffTrauma / $scope.tempResult.trauma) * 100);
                $scope.resultPerc.percTrauma = $scope.resultPerc.percTrauma.toFixed(0);
                $scope.surplusOptionTrauma = false;
            }

            $scope.mediumOptionLife = $scope.resultPerc.percLife > 75 ? true : false;
            $scope.mediumOptionTPD = $scope.resultPerc.percTPD > 75 ? true : false;
            $scope.mediumOptionIP = $scope.resultPerc.percIP > 75 ? true : false;
            $scope.mediumOptionTrauma = $scope.resultPerc.percTrauma > 75 ? true : false;


        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: $("#tell-us").position().top + 80 }, "slow");
        }
    }
    $scope.calculateFinal(true, false);

    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {

            var personalDetailsObject = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                address: $scope.personalDetails.address,
                postalCode: $scope.personalDetails.postalCode,
                dob: $scope.dob,
                age: $scope.age,
                genderOption: $scope.genderOption,
                spouseOption: $scope.spouseOption,
                numChildren: $scope.numChildren,
            };

            var liabilitiesObject = {
                homeMortgage: homeMortgage1,
                investmentPropertyMortgage: investmentPropertyMortgage1,
                creditCardDebt: creditCardDebt1,
                carLoan: carLoan1,
                personalLoan: personalLoan1,
                otherLoan: otherLoan1
            };

            var assetsObject = {
                homeValue: homeValue1,
                cashAtBank: cashAtBank1,
                otherInvestment: otherInvestment1,
                superBalance: superBalance1
            };

            var otherExpenses = {
                funeralCost: funeralCost1,
                educationExpense: educationExpensePerYearPerChild1,
                familyLivingCost: familyLivingCostPerYear1,
                moveProperty: $scope.buyOption ? "Yes" : "No",
                newPropertyValue: valueOfNewProperty1,
                moneyBorrowed: moneyToBeBorrowed1,
                saleProceeds: $scope.saleProceeds
            };

            var existingCovers = {
                ecLife: ecLife1,
                ecTPD: ecTPD1,
                ecIP: ecIP1,
                ecTrauma: ecTrauma1
            };

            var assumptions = {
                inflation: inflation1,
                rateOfReturn: rateOfReturn1,
                realRate: $scope.realRateOfReturn
            }

            if ($scope.buyOption) {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, $scope.resultS2, $scope.buyOption, $scope.waitingPeriod);
            } else {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, {}, $scope.buyOption, $scope.waitingPeriod);

            }
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    });

    // document.getElementById("bar-chart").addEventListener("click", function() {
    $("#bar-chart,#bar-chart-m").on("click", function() {
        $scope.chartOneOpen = true;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = false;
        $("#containerB2").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB").style.display = "block";
        $("#containerB").highcharts().reflow();
        $timeout(0);
    });

    // document.getElementById("area-chart").addEventListener("click", function() {
    $("#area-chart,#area-chart-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = true;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = false;
        $("#containerB").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB2").style.display = "block";
        $("#containerB2").highcharts().reflow();
        $timeout(0);
    });
    $("#area-chart1,#area-chart1-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = true;
        $scope.chartFourOpen = false;
        $("#containerB").highcharts().reflow();
        $("#containerB2").highcharts().reflow();
        $("#containerB4").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB4").style.display = "none";
        document.getElementById("containerB3").style.display = "block";
        $("#containerB3").highcharts().reflow();
        $timeout(0);
    });
    $("#area-chart2,#area-chart2-m").on("click", function() {
        $scope.chartOneOpen = false;
        $scope.chartTwoOpen = false;
        $scope.chartThreeOpen = false;
        $scope.chartFourOpen = true;
        $("#containerB").highcharts().reflow();
        $("#containerB2").highcharts().reflow();
        $("#containerB3").highcharts().reflow();
        document.getElementById("containerB").style.display = "none";
        document.getElementById("containerB2").style.display = "none";
        document.getElementById("containerB3").style.display = "none";
        document.getElementById("containerB4").style.display = "block";
        $("#containerB4").highcharts().reflow();
        $timeout(0);
    });

    $(".print-doc").on("click", printBothCharts);

    function printBothCharts() {
        if ($scope.forms.ttrForm.$valid) {
            var printUpdate = function() {
                $('#container').highcharts().reflow();
                $("#containerA").highcharts().reflow();
            };

            if ($scope.chartOneOpen) {
                document.getElementById("containerA").style.display = "block";
                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("containerA").style.display = "none";
                }, 200);
            } else {
                document.getElementById("container").style.display = "block";
                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("container").style.display = "none";
                }, 200);
            }
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    };

    $scope.resetSliders = function() {
        window.contentRevealOptions.reset = true;
        sr.reveal('.contents', contentRevealOptions);
        // console.log(contentRevealOptions);
        var sliders = document.getElementsByClassName("slider-div");
        [].forEach.call(sliders, function(slider) {
            slider.noUiSlider.reset();
        })
        document.getElementById("results").style.display = "none";
        // $("#inputs").animate({height: 'toggle'},2000);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementById("inputs").style.display = "block";

        $scope.saveWithNew = false;
    }


}]);
