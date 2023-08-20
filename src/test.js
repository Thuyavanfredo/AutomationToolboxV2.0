$(document).ready(function () {
        $("#form").submit(function (e) {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          console.log(formProps);
          let texttocopy;
          let unit_torque;
          let unit_length;
          if (formProps.value) {
            if (formProps.engtomet) {
              if (formProps.value.includes("in")) {
                formProps.value = formProps.value.replace("in", "");
                formProps.tol = formProps.tol.replace("in", "");
                formProps.cvalue = (formProps.value / 8.85074576738).toFixed(
                  String(formProps.value).split(".")[1] &&
                    String(formProps.value).split(".")[1].length
                );
                if (formProps.tol) {
                  formProps.ctolvalue = (formProps.tol / 8.85074576738).toFixed(
                    String(formProps.tol).split(".")[1] &&
                      String(formProps.tol).split(".")[1].length
                  );
                }
                unit_torque = "in";
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
                }N.m</metric><english>${formProps.value} ${
                  formProps.tol ? "± " + formProps.tol + " " : ""
                }${unit_torque}</english></unitsgrp>`;
              }
              if (formProps.value.includes("ft")) {
                formProps.value = formProps.value.replace("ft", "");
                formProps.tol = formProps.tol.replace("ft", "");
                formProps.cvalue = (formProps.value / 0.737562149277).toFixed(
                  String(formProps.value).split(".")[1] &&
                    String(formProps.value).split(".")[1].length
                );
                if (formProps.tol) {
                  formProps.ctolvalue = (formProps.tol / 0.737562149277).toFixed(
                    String(formProps.tol).split(".")[1] &&
                      String(formProps.tol).split(".")[1].length
                  );
                }
                unit_torque = "ft";
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
                }N.m</metric><english>${formProps.value} ${
                  formProps.tol ? "± " + formProps.tol + " " : ""
                }${unit_torque}</english></unitsgrp>`;
              }
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
              }N.m </metric><english>${formProps.value} ${
                formProps.tol ? "± " + formProps.tol + " " : ""
              }lb ${unit_torque}</english></unitsgrp>`;
            } else {
              if (formProps.value <= 34) {
                formProps.cvalue = (formProps.value * 8.85074576738).toFixed(
                  String(formProps.value).split(".")[1] &&
                    String(formProps.value).split(".")[1].length
                );
                if (formProps.tol) {
                  formProps.ctolvalue = (formProps.tol * 8.85074576738).toFixed(
                    String(formProps.tol).split(".")[1] &&
                      String(formProps.tol).split(".")[1].length
                  );
                }
                unit_torque = "in";
              } else {
                formProps.cvalue = (formProps.value * 0.737562149277).toFixed(
                  String(formProps.value).split(".")[1] &&
                    String(formProps.value).split(".")[1].length
                );
                if (formProps.tol) {
                  formProps.ctolvalue = (formProps.tol * 0.737562149277).toFixed(
                    String(formProps.tol).split(".")[1] &&
                      String(formProps.tol).split(".")[1].length
                  );
                }
                unit_torque = "ft";
              }
              texttocopy = `<unitsgrp><metric>${formProps.value} ${
                formProps.tol ? "± " + formProps.tol + " " : ""
              }N.m</metric><english>${formProps.cvalue} ${
                formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
              }lb ${unit_torque}</english></unitsgrp>`;
            }
          } else if (formProps.value1) {
            if (formProps.engtomet) {
              if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
                formProps.cvalue = (formProps.value1 / 0.03937007874).toFixed(
                  String(formProps.value1).split(".")[1] &&
                    String(formProps.value1).split(".")[1].length - 1
                );
                formProps.ctolvalue = (formProps.tol1 / 0.03937007874).toFixed(
                  String(formProps.tol1).split(".")[1] &&
                    String(formProps.tol1).split(".")[1].length - 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }mm</metric><english>${formProps.value1} ${
                  Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
                }inch</english></unitsgrp>`;
              } else {
                inputDecimal = formProps.value1.includes(".")
                  ? formProps.value1
                  : formProps.value1 + ".0";
                tolDecimal = formProps.tol1.includes(".")
                  ? formProps.tol1
                  : formProps.tol1 + ".0";
                formProps.cvalue = (inputDecimal / 0.03937007874).toFixed(
                  String(inputDecimal).split(".")[1] &&
                    String(inputDecimal).split(".")[1].length - 1
                );
                formProps.ctolvalue = (tolDecimal / 0.03937007874).toFixed(
                  String(tolDecimal).split(".")[1] &&
                    String(tolDecimal).split(".")[1].length - 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }mm</metric><english>${inputDecimal} ${
                  Number(tolDecimal) ? "± " + tolDecimal + " " : ""
                }inch</english></unitsgrp>`;
                console.log(formProps.tol);
              }
            } else {
              if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
                formProps.cvalue = (formProps.value1 * 0.03937007874).toFixed(
                  String(formProps.value1).split(".")[1] &&
                    String(formProps.value1).split(".")[1].length + 1
                );
                formProps.ctolvalue = (formProps.tol1 * 0.03937007874).toFixed(
                  String(formProps.tol1).split(".")[1] &&
                    String(formProps.tol1).split(".")[1].length + 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.value1} ${
                  Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
                }mm</metric><english>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }inch</english></unitsgrp>`;
              } else {
                inputDecimal = formProps.value1.includes(".")
                  ? formProps.value1
                  : formProps.value1 + ".0";
                tolDecimal = formProps.tol1.includes(".")
                  ? formProps.tol1
                  : formProps.tol1 + ".0";
                formProps.cvalue = (inputDecimal * 0.03937007874).toFixed(
                  String(inputDecimal).split(".")[1] &&
                    String(inputDecimal).split(".")[1].length + 1
                );
                formProps.ctolvalue = (tolDecimal * 0.03937007874).toFixed(
                  String(tolDecimal).split(".")[1] &&
                    String(tolDecimal).split(".")[1].length + 1
                );
                texttocopy = `<unitsgrp><metric>${inputDecimal} ${
                  Number(tolDecimal) ? "± " + tolDecimal + " " : ""
                }mm</metric><english>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }inch</english></unitsgrp>`;
              }
            }
          } else if (formProps.value1a) {
            if (formProps.engtomet) {
              if (
                formProps.value1a.includes(".") &&
                formProps.tol1a.includes(".")
              ) {
                formProps.cvalue = (formProps.value1a / 0.39370079).toFixed(
                  String(formProps.value1a).split(".")[1] &&
                    String(formProps.value1a).split(".")[1].length - 1
                );
                formProps.ctolvalue = (formProps.tol1a / 0.39370079).toFixed(
                  String(formProps.tol1a).split(".")[1] &&
                    String(formProps.tol1a).split(".")[1].length - 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }mm</metric><english>${formProps.value1a} ${
                  Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
                }inch</english></unitsgrp>`;
              } else {
                inputDecimal = formProps.value1a.includes(".")
                  ? formProps.value1a
                  : formProps.value1a + ".0";
                tolDecimal = formProps.tol1a.includes(".")
                  ? formProps.tol1a
                  : formProps.tol1a + ".0";
                formProps.cvalue = (inputDecimal / 0.39370079).toFixed(
                  String(inputDecimal).split(".")[1] &&
                    String(inputDecimal).split(".")[1].length - 1
                );
                formProps.ctolvalue = (tolDecimal / 0.39370079).toFixed(
                  String(tolDecimal).split(".")[1] &&
                    String(tolDecimal).split(".")[1].length - 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }mm</metric><english>${inputDecimal} ${
                  Number(tolDecimal) ? "± " + tolDecimal + " " : ""
                }inch</english></unitsgrp>`;
              }
            } else {
              if (
                formProps.value1a.includes(".") &&
                formProps.tol1a.includes(".")
              ) {
                formProps.cvalue = (formProps.value1a * 0.39370079).toFixed(
                  String(formProps.value1a).split(".")[1] &&
                    String(formProps.value1a).split(".")[1].length + 1
                );
                formProps.ctolvalue = (formProps.tol1a * 0.39370079).toFixed(
                  String(formProps.tol1a).split(".")[1] &&
                    String(formProps.tol1a).split(".")[1].length + 1
                );
                texttocopy = `<unitsgrp><metric>${formProps.value1a} ${
                  Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
                }cm</metric><english>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }inch</english></unitsgrp>`;
              } else {
                inputDecimal = formProps.value1a.includes(".")
                  ? formProps.value1a
                  : formProps.value1a + ".0";
                tolDecimal = formProps.tol1a.includes(".")
                  ? formProps.tol1a
                  : formProps.tol1a + ".0";
                formProps.cvalue = (inputDecimal * 0.39370079).toFixed(
                  String(inputDecimal).split(".")[1] &&
                    String(inputDecimal).split(".")[1].length + 1
                );
                formProps.ctolvalue = (tolDecimal * 0.39370079).toFixed(
                  String(tolDecimal).split(".")[1] &&
                    String(tolDecimal).split(".")[1].length + 1
                );
                texttocopy = `<unitsgrp><metric>${inputDecimal} ${
                  Number(tolDecimal) ? "± " + tolDecimal + " " : ""
                }cm</metric><english>${formProps.cvalue} ${
                  Number(formProps.ctolvalue)
                    ? "± " + formProps.ctolvalue + " "
                    : ""
                }inch</english></unitsgrp>`;
              }
            }
          } else if (formProps.value2) {
            if (formProps.engtomet) {
              formProps.cvalue = (formProps.value2 / 2.20462262).toFixed(
                String(formProps.value2).split(".")[1] &&
                  String(formProps.value2).split(".")[1].length
              );
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} kg</metric><english>${formProps.value2} lb</english></unitsgrp>`;
            } else {
              formProps.cvalue = (formProps.value2 * 2.20462262).toFixed(
                String(formProps.value2).split(".")[1] &&
                  String(formProps.value2).split(".")[1].length
              );
              texttocopy = `<unitsgrp><metric>${formProps.value2} kg</metric><english>${formProps.cvalue} lb</english></unitsgrp>`;
            }
          } else if (formProps.value3) {
            if (formProps.engtomet) {
              formProps.cvalue = (
                (formProps.value3 - 32) *
                0.555555555555556
              ).toFixed(
                String(formProps.value3).split(".")[1] &&
                  String(formProps.value3).split(".")[1].length
              );
              if (formProps.tol1b) {
                formProps.ctolvalue = (
                  (formProps.tol1b - 32) *
                  0.555555555555556
                ).toFixed(
                  String(formProps.tol1b).split(".")[1] &&
                    String(formProps.tol1b).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              } °C</metric><english>${formProps.value3} ${
                Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
              }°F</english></unitsgrp>`;
            } else {
              formProps.cvalue = (formProps.value3 * 1.8 + 32).toFixed(
                String(formProps.value3).split(".")[1] &&
                  String(formProps.value3).split(".")[1].length
              );
              if (formProps.tol1b) {
                formProps.ctolvalue = (formProps.tol1b * 1.8 + 32).toFixed(
                  String(formProps.tol1b).split(".")[1] &&
                    String(formProps.tol1b).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.value3} ${
                Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
              }°C</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }°F</english></unitsgrp>`;
            }
          } else if (formProps.value4) {
            if (formProps.engtomet) {
              formProps.cvalue = (formProps.value4 * 3.785412).toFixed(
                String(formProps.value4).split(".")[1] &&
                  String(formProps.value4).split(".")[1].length
              );
              if (formProps.tol1c) {
                formProps.ctolvalue = (formProps.value4 * 3.785412).toFixed(
                  String(formProps.tol1c).split(".")[1] &&
                    String(formProps.tol1c).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }US gpm</metric><english>${formProps.value4} ${
                Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
              }L/min</english></unitsgrp>`;
            } else {
              formProps.cvalue = (formProps.value4 * 0.264172).toFixed(
                String(formProps.value4).split(".")[1] &&
                  String(formProps.value4).split(".")[1].length
              );
              if (formProps.tol1c) {
                formProps.ctolvalue = (formProps.value4 * 0.264172).toFixed(
                  String(formProps.tol1c).split(".")[1] &&
                    String(formProps.tol1c).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.value4} ${
                Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
              }L/min</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }US gpm</english></unitsgrp>`;
            }
          } else if (formProps.value5) {
            if (formProps.engtomet) {
              formProps.cvalue = (formProps.value5 * 6.89475727999991).toFixed(
                String(formProps.value5).split(".")[1] &&
                  String(formProps.value5).split(".")[1].length
              );
              if (formProps.tol1d) {
                formProps.ctolvalue = (formProps.value5 * 6.89475727999991).toFixed(
                  String(formProps.tol1d).split(".")[1] &&
                    String(formProps.tol1d).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }kPa</metric><english>${formProps.value5} ${
                Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
              }psi</english></unitsgrp>`;
            } else {
              formProps.cvalue = (formProps.value5 * 0.14503773800722).toFixed(
                String(formProps.value5).split(".")[1] &&
                  String(formProps.value5).split(".")[1].length
              );
              if (formProps.tol1d) {
                formProps.ctolvalue = (formProps.value5 * 0.14503773800722).toFixed(
                  String(formProps.tol1d).split(".")[1] &&
                    String(formProps.tol1d).split(".")[1].length
                );
              }
              texttocopy = `<unitsgrp><metric>${formProps.value5} ${
                Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
              }kPa</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }psi</english></unitsgrp>`;
            }
          } else if (formProps.value6) {
            if (formProps.engtomet) {
              formProps.cvalue = (formProps.value6 * 3.78541).toFixed(
                String(formProps.value6).split(".")[1] &&
                  String(formProps.value6).split(".")[1].length
              );
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} L</metric><english>${formProps.value6} US gal</english></unitsgrp>`;
            } else {
              formProps.cvalue = (formProps.value6 * 0.264172).toFixed(
                String(formProps.value6).split(".")[1] &&
                  String(formProps.value6).split(".")[1].length
              );
              texttocopy = `<unitsgrp><metric>${formProps.value6} L</metric><english>${formProps.cvalue} US gal</english></unitsgrp>`;
            }
          }
          navigator.clipboard.writeText(texttocopy);
        });
        $(".bt1 button:nth-child(2)").click(function (e) {
          $("#form").trigger("reset");
          $(".upright h3").text("Metric to English");
          $(".upright h3").css("color", "#999999");
          $(".note h3").css("display", "none");
          $(".toggle input").attr("checked", false);
        });
        $(".toggle input").change(function (e) {
          if ($(this).is(":checked")) {
            $(".upright h3").text("English to Metric");
            $(".upright h3").css("color", "#565946");
            $(".note h3").css("display", "block");
            $(".toggle input").attr("checked", true);
          } else {
            $(".upright h3").text("Metric to English");
            $(".upright h3").css("color", "#999999");
            $(".note h3").css("display", "none");
            $(".toggle input").attr("checked", false);
          }
        });
});

