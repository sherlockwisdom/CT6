// section 2
var label_2 = document.getElementById("smr");
var label_2_date = document.getElementById("smr-date");
var label_2_done_by = document.getElementById("smr-done_by");
var label_2a = document.getElementById("result_1");
var label_2a_no_afb_seen = document.getElementById("result_1-no_afb_seen");
var label_2a_scanty = document.getElementById("result_1-scanty");
var label_2a_1_plus = document.getElementById("result_1-1_plus");
var label_2a_2_plus = document.getElementById("result_1-2_plus");
var label_2a_3_plus = document.getElementById("result_1-3_plus");
var label_2a_tb_lamp_positive = document.getElementById("result_1-tb_lamp_positive");
var label_2a_tb_lamp_negative = document.getElementById("result_1-tb_lamp_negative");
var label_2a_not_done = document.getElementById("result_1-not_done");
var label_2b = document.getElementById("result_2");
var label_2b_no_afb_seen = document.getElementById("result_2-no_afb_seen");
var label_2b_scanty = document.getElementById("result_2-scanty");
var label_2b_1_plus = document.getElementById("result_2-1_plus");
var label_2b_2_plus = document.getElementById("result_2-2_plus");
var label_2b_3_plus = document.getElementById("result_2-3_plus");
var label_2b_tb_lamp_positive = document.getElementById("result_2-tb_lamp_positive");
var label_2b_tb_lamp_negative = document.getElementById("result_2-tb_lamp_negative");
var label_2b_not_done = document.getElementById("result_2-not_done");
// section 3
var label_3 = document.getElementById("xpert");
var label_3_date = document.getElementById("xpert-date");
var label_3_done_by = document.getElementById("xpert-done_by");
var label_3a = document.getElementById("mtb_result");
var label_3a_dectected = document.getElementById("mtb_result-dectected");
var label_3a_not_dectected = document.getElementById("mtb_result-not_dectected");
var label_3a_trace = document.getElementById("mtb_result-trace");
var label_3a_error_invalid = document.getElementById("mtb_result-error_invalid");
var label_3a_not_done = document.getElementById("mtb_result-not_done");
var label_3b = document.getElementById("grades");
var label_3b_high = document.getElementById("grades-high");
var label_3b_medium = document.getElementById("grades-medium");
var label_3b_low = document.getElementById("grades-low");
var label_3b_very_low = document.getElementById("grades-very_low");
var label_3b_n_a = document.getElementById("grades-n_a");
var label_3c = document.getElementById("rif_result");
var label_3c_dectected = document.getElementById("rif_result-dectected");
var label_3c_indeterminate = document.getElementById("rif_result-indeterminate");
var label_3c_not_dectected = document.getElementById("rif_result-not_dectected");
var label_3c_not_done = document.getElementById("rif_result-not_done");
// section 4
var label_4 = document.getElementById("urine_lf_lam");
var label_4_negative = document.getElementById("urine_lf_lam-negative");
var label_4_positive = document.getElementById("urine_lf_lam-positive");
var label_4_error_invalid = document.getElementById("urine_lf_lam-error_invalid");
var label_4_not_done = document.getElementById("urine_lf_lam-not_done");
var label_4_date = document.getElementById("urine_lf_lam-date");
var label_4_done_by = document.getElementById("urine_lf_lam-done_by");

// Hider
function hide(ID) {
    ID.style.display = "none";
}
// UnHider
function unhide(ID) {
    ID.style.display = "inline";
}
// listen for checked button
function checkedButton(ID, callback) {
    if (ID.checked == true) {
        callback();
    }
}

// section_2_behaviour
function sec2_behaviour(action) {
    if (action == "hide") {
        hide(label_2b);
        hide(label_2_date);
        hide(label_2_done_by);
    } else if (action == "unhide") {
        unhide(label_2b);
        unhide(label_2_date);
        unhide(label_2_done_by);
    }
}
// section_3_behaviour
function sec3_behaviour(action) {
    if (action == "hide") {
        hide(label_3b);
        hide(label_3c);
        hide(label_3_date);
        hide(label_3_done_by);
    } else if (action == "unhide") {
        hide(label_3b);
        hide(label_3c);
        hide(label_3_date);
        hide(label_3_done_by);
    }
}
// section_4_behaviour
function sec4_behaviour(action) {
    if (action == "hide") {
        hide(label_4_date);
        hide(label_4_done_by);
    } else if (action == "unhide") {
        hide(label_4_date);
        hide(label_4_done_by);
    }
}

// Section 2 action
label_2a_no_afb_seen.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_scanty.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_1_plus.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_2_plus.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_3_plus.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_tb_lamp_positive.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_tb_lamp_negative.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("unhide"));
});
label_2a_not_done.addEventListener("click", function () {
    checkedButton(this, sec2_behaviour("hide"));
});