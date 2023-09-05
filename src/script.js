$(document).ready(function () {
  $(".icon-expand:nth-child(1)").click(function () {
    $(".body").html("");
    $(".body").css({
      "background-image": "url(../img/homenew.png)",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".body").html(`
      <video class="video" controls id="video" poster="../img/sis2.0.png" src="../img/Introducing SIS 2.0.webmhd.webm"></video> 
      `);
    $(".pdt-btns").hide();
    $(".spec-btns").hide();
    $(".bug").show();
    $(".da-btns").hide();
    $("#text-title").hide();
  });
  $(".icon-expand:nth-child(2)").click(function () {
    $(".body").html(`<form id="form">
        <div class="contact">
            <p>For any information or issues in the automation toolbox <br> Please feel free to contact</p>
            <ul>
                <li>Thuyavan Tamilarasan(<font color= yellow>tamilt</font>)</li>
                <li>Dineshkumar Krishnamoorthy(<font color= yellow>krishd6</font>)</li>
                <li>Periodical XF team</li>
            </ul>
        </div>
    </form>`);
    $(".body").css({
      "background-image": "none",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".pdt-btns, .spec-btns").hide();
    $(".da-btns").hide();
    $("#text-title").hide();
    $(".bug").show();
    $(".video").hide();
  });
  $(".icon-expand:nth-child(3)").click(function () {
    $(".body").html(`<form id="form">
      <div class="info">
      <div class="names-title">
      <p>Automation tool box combines all the exisiting automations in SID into once place</p>
      <p>Thanks to all the individuals who have contributed</p>
      </div>
      <div class="names">
          <div class="name-align">
              <strong>Graphic Insert Tool</strong>
              <ul>
                  <li>Dineshkumar Krishnamoorthy</li>
                  <li>Sathesh Thanapaul</li>
              </ul>
          </div>
          <div class="name-align">
              <strong>Xref Insert Tool</strong>
              <ul>
                  <li>Kanakaraj Mayilswamy</li>
                  <li>Sathesh Thanapaul</li>
              </ul>
          </div>
          <div class="name-align">
              <strong>Steplist Creator Tool</strong>
              <ul>
                  <li>Kanakaraj Mayilswamy</li>
                  <li>Thuyavan Tamilarasan</li>
              </ul>
          </div>
          <div class="name-align">
              <strong>Metric Conversion Tool</strong>
              <ul>
                  <li>Paulvin Joseph</li>
                  <li>Zackriya Thajudeen</li>
                  <li>Prabhu Vijayan</li>
              </ul>
          </div>
          <div class="name-align">
              <strong>Prefix Update Tool</strong>
              <ul>
                  <li>Jarett Karnia</li> 
              </ul> 
          </div>
          <div class="name-align">
              <strong>Weight calculator Tool</strong>
              <ul>
                  <li>Gokul Chandrasekaran</li> 
              </ul> 
          </div> 
          <div class="name-align">
              <strong>BookScan</strong>
              <ul>
                  <li>Simon Santhosh</li> 
                  <li>Thuyavan</li> 
              </ul> 
          </div>                          
      </div>
  </div>
    </form>`);
    $(".body").css({
      "background-image": "none",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".pdt-btns, .spec-btns").hide();
    $(".da-btns").hide();
    $("#text-title").hide();
    $(".bug").show();
    $(".video").hide();
  });
  $(".bt:eq(0)").click(function () {
    $(".body").html(`<form id="form">
                <div class="graphic-container">
                <div class="gno">
                    <label class="gtitle">Graphic Number</label>
                    <input type="text" required placeholder="Enter Graphic Number" name="graphics">
                </div>
                <div class="gtype">
                    <div class="gtitle">Select Graphic Type</div>
                    <div class="gtype1">
                        <ul>
                            <li>
                                <input type="radio" name="Graphic" value="0">
                                <label>Page Wide</label>
                            </li>
                            <li>
                                <input type="radio" name="Graphic" value="1">
                                <label>Column Wide</label>
                            </li>
                            <li>
                                <input type="radio" name="Graphic" value="2">
                                <label>Full Page</label>
                            </li>
                            <li>
                                <input type="radio" name="Graphic" value="3">
                                <label>Fold out</label>
                            </li>
                            <li>
                                <input type="radio" name="Graphic" value="4">
                                <label>Full Page rotated</label>
                            </li>
                            <li>
                                <input type="radio" name="Graphic" value="5">
                                <label>Page Wide Rotated</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="submit">
                    <button type="submit" onclick="window.electronAPI.updateEvent('Graphic Insert')" id="btn">
                      <p id="btnText">Generate</p>
                      <div class="checked">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                          <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                        </svg>
                      </div>
                    </button>
                    <button type="reset">Clear</button>
                </div>
            </div> 
          </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const templates = [
        [
          '<figure figure-style="page-wide" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="full-page" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="foldout" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="full-page-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="page-wide-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
      ];
      const x = templates[formProps.Graphic].join((formProps.graphics.toLowerCase().replace(/\s/g, "")));
      navigator.clipboard.writeText(x);
    });
    $(".submit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(1)").click(function () {
    $(".body").html(`<form id="form" class="xref">
      <div class="xref-container">
        <div class="xno">
              <div class="x-ref">
                  <label class="xtitle">IE Control Number</label>
                  <input type="text" required placeholder="Enter IE Control Number" name="IE">
              </div>
              <div class="x-ref1">
                  <label class="xtitle">ID Control Number</label>
                  <input type="text" required placeholder="Enter ID Control Number" name="ID">
              </div>
        </div>
        <div class="xtype">
              <div class="xtitle">Select Xref Tag Type</div>
                <div class="xtype1">
                    <ul>
                        <li>
                            <input type="radio" name="XREF" value="0">
                            <label>Figure</label>
                        </li>
                        <li>
                            <input type="radio" name="XREF" value="1">
                            <label>Step</label>
                        </li>
                        <li>
                            <input type="radio" name="XREF" value="2">
                            <label>Footnote</label>
                        </li>
                        <li>
                            <input type="radio" name="XREF" value="3">
                            <label>Table</label>
                        </li>
                        <li>
                            <input type="radio" name="XREF" value="4">
                            <label>Section</label>
                        </li>
                    </ul>
                </div>
              </div>
        <div class="xsubmit">
            <button type="submit" onclick="window.electronAPI.updateEvent('Xref Insert')" id="btn">
            <p id="btnText">Generate</p>
            <div class="checked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
              </svg>
            </div>
          </button>
            <button type="reset">Clear</button>
        </div>
      </div> 
          </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const templates = [
        'Illustration <xref format="dita" href="#./IE.ID"scope="local" type="figure"></xref>',
        'Step <xref format="dita" href="#./IE.ID"scope="local" type="step"></xref>',
        'Footnote <xref format="dita" href="#./IE.ID"scope="local" type="fn"></xref>',
        'Table <xref format="dita" href="#./IE.ID"scope="local" type="table"></xref>',
        'Section <xref format="dita" href="#./IE.ID"scope="local" type="sect"></xref>',
      ];
      if (formProps.length <= 0) {
        alert("Please enter Graphic Control Number");
        return;
      }
      const w = templates[formProps.XREF].split("IE");
      const x = w.join(formProps.IE.toLowerCase().replace(/\s/g, ""));
      const y = x.split("ID");
      const z = y.join((formProps.ID.toLowerCase().replace(/\s/g, "")));
      navigator.clipboard.writeText(z);
      console.log(z);
    });
    $(".submit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(3)").click(function () {
    $(".body").html(`<form class="metric" id="form">
    <div class="metcontainer">
    <div class="toggle-container">
        <div class="toggle">
          <input type="checkbox" name="engtomet">
        </div>
        <div class="upright">
          <h3>Metric to English</h3>
        </div>
    </div>
      <div class="text">
        <div class="text-items"><p>Torque</p></div>
        <div class="text-items"><p>Length (mm)</p></div>
        <div class="text-items"><p>Length (cm)</p></div>
        <div class="text-items"><p>weight</p></div>
        <div class="text-items"><p>Temperature</p></div>
        <div class="text-items"><p>Flow</p></div>
        <div class="text-items"><p>pressure</p></div>
        <div class="text-items"><p>Volume</p></div>
      </div>
      <div class="metric-container">
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol">
          <div class="note">
            <h3>Note: Mention <font color= #ebece3>ft/in</font> along with values (Eg: <font color= #ebece3>15ft/15in</font>)</h3>
          </div>
        </div>
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1">
        </div>
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1a">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1a">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value2" style="width:442px;">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value3">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1b">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value4">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1c">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value5">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1d">
        </div>
        <div class="metric-items">
          <input type="text" name="value6" placeholder="Enter value" style="width:442px;">
        </div>
      </div>
      <div class="msubmit-da">
            <button type="submit" onclick="window.electronAPI.updateEvent('Metric conversion-PDT')" id="btn">
              <p id="btnText">Generate</p>
              <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                </svg>
              </div>
          </button>
          <button type="reset">Clear</button>
    </div>
  </div>
  </form>`);
    $(".body").css("background-image", "none");
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData.toLowerCase().replace(/\s/g, ""));
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
  $(".bt:eq(4)").click(function () {
    $(".body").html("");
    $(".body").css("background-image", "url(../img/main_page_low.png)");
  });
  $(".bt:eq(6)").click(function () {
    $(".body").html(`<form id="form">
            <div class="spec">
                <div class=".textarea"><textarea required placeholder="Paste PDF content here"></textarea></div>
                <div class=".textarea"><textarea required placeholder="Paste Excel content here"></textarea></div>
                <div class="ssubmit">
                <button type="submit" onclick="window.electronAPI.updateEvent('BookScan')" id="btn">
                <p id="btnText">Generate</p>
                <div class="checked">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                  </svg>
                </div>
              </button>            
                <button class="bt1" type="reset">Clear</button>
                </div>
            </div>
  </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
      e.preventDefault();
      const tx = document.getElementsByTagName("textarea");
      let inputs = [];
      let noOfprefix = 0;
      for (let i = 0; i < tx.length; i++) {
        inputs.push(tx[i].value);
      }
      // console.log(inputs[1].split("\n"))
      let notAvailable = ["Not Available IE's \tNot Available Part numbers"];
      let Available = ["Available IE's \tAvailable Part numbers"];
      let rows = inputs[1].split("\n");
      let prefixArray = rows[1].split("\t").filter((p) => p != "");
      prefixArray.map((item) => {
        if (item) noOfprefix++;
      });
      // console.log(rows)
      // console.log(rows.length)
      rows[0] = "New\t" + rows[0];
      rows[1] = "\t" + rows[1];
      // console.log(rows, "rows")
      rows.map((item, index) => {
        if (index > 1) {
          let isMatching = [];
          let cellsArray = item.split("\t");
          // console.log(typeof cellsArray, cellsArray)
          // console.log(cellsArray[2])
          // if((cellsArray[2]!=="" && cellsArray[2]!=undefined) || (cellsArray[1]!=="" && cellsArray[1]!=undefined)){
          if (cellsArray[1] !== "" && cellsArray[1] != undefined) {
            // let oldieno= cellsArray[1]
            let newieno = cellsArray[1];
            // Changed no from 2 to 1
            let partno = cellsArray[0];
            console.log(cellsArray);
            let prefixPresence = cellsArray
              .slice(2, cellsArray.length)
              .filter((f) => f != "");
            console.log(prefixPresence);
            // number has been changed from 3 to 2
            // console.log(cellsArray, oldieno, newieno, partno, prefixPresence)
            if (partno.includes(",")) {
              partno = partno.split(",");
            } else {
              partno = [partno];
            }
            let ieno;
            // console.log(newieno)
            newieno &&
              newieno.split("/").map((item) => {
                if (item.includes("i")) {
                  ieno = item;
                }
              });
            // if(!ieno){
            //   oldieno.split("/").map((item)=>{
            //     if(item.includes("i")){
            //       ieno = item
            //     }
            //   })
            // }
            ieno = ieno.replace(/[^a-zA-Z0-9]+/g, "");
            if (ieno && !inputs[0].includes(ieno)) {
              // notAvailable.push(`${ieno} \t${(item.split("\t")[0])}`)
              //console.log("noieno", ieno)
              isMatching[0] = false;
            } else if (ieno != "" && ieno && ieno.includes("i")) {
              if (partno && partno.length > 0) {
                partno.map((i_partno) => {
                  if (i_partno && !inputs[0].includes(i_partno)) {
                    //console.log("nopartno", i)
                    isMatching[0] = false;
                  } else {
                    let batchIEContent = inputs[0]
                      .split(ieno)[1]
                      .split("SMCS Code:")
                      .slice(1, 2)
                      .join("");
                    let prefixCount = batchIEContent.split("S/N");
                    // console.log(prefixCount.length)
                    //console.log(prefixPresence)
                    // console.log(prefixArray)
                    if (prefixCount[1]) {
                      prefixPresence.map((i, in_) => {
                        isMatching[in_] = false;
                        // console.log(in_)
                        if (!prefixArray[in_].includes(":"))
                          prefixArray[in_] = ": " + prefixArray[in_];
                        if (
                          i == 0 &&
                          !batchIEContent.includes(prefixArray[in_])
                        ) {
                          isMatching[in_] = true;
                          // console.log('no prefix true', prefixArray[in_])
                        } else if (
                          i == 1 &&
                          !batchIEContent.includes(prefixArray[in_])
                        ) {
                          isMatching[in_] = false;
                          // console.log('no prefix false', prefixArray[in_])
                        } else {
                          // console.log(prefixCount)
                          prefixCount.map((a_, a_index) => {
                            // console.log(a_index)
                            // if(a_index < prefixCount.length){
                            // console.log(prefixCount[a_index+1].includes(prefixArray[in_]), a_index, i_partno, prefixArray[in_], a_.includes(i_partno), i==1, in_)
                            if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              a_.includes(i_partno) &&
                              i == 1
                            ) {
                              // console.log("true",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]),a_.includes(i_partno),i==1)
                              isMatching[in_] = true;
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              !a_.includes(i_partno) &&
                              i == 0
                            ) {
                              // console.log("true",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , !a_.includes(i_partno) , i==0)
                              isMatching[in_] = true;
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              !a_.includes(i_partno) &&
                              i == 1
                            ) {
                              // console.log("nottrue",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , !a_.includes(i_partno) , i==1)
                              isMatching[in_] = false;
                              // console.log("nottrue", isMatching[in_])
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              a_.includes(i_partno) &&
                              i == 0
                            ) {
                              // console.log("notfalse",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , a_.includes(i_partno) , i==0)
                              isMatching[in_] = false;
                              return true;
                            }
                            // }
                          });
                        }
                      });
                    } else {
                      prefixPresence.map((i_, in_) => {
                        console.log(i_, i_ == 1);
                        isMatching[in_] = i_ == 1 ? true : false;
                      });
                    }
                  }
                });
              }
            }

            // console.log(JSON.stringify(rows[index]).split("\\t"))
            // rows[index] = JSON.stringify(rows[index]).split("\\t").filter(f=>f!="").join("\\t")
            // console.log(JSON.stringify(rows[index]))
            // rows[index] = JSON.parse(rows[index])
            console.log(isMatching);
            rows[index] = `${isMatching.includes(false) ? "NO" : "YES"}\t${
              rows[index]
            }`;
          } else {
            if (cellsArray[0] != "") {
              rows[index] = `NO\t${rows[index]}`;
              //console.log(rows[index])
            }
          }
        }
      });
      // console.log(notAvailable)
      navigator.clipboard.writeText(rows.join("\n"));
      //  console.log(rows)
    });
    $(".ssubmit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(7)").click(function () {
    $(".body").html(`<form id="form">
    <div class="sno">
      <label class="spectitle">Number of Rows</label>
      <input type="number" required placeholder="Enter number of rows" name="rows">
    </div>
    <div class="spsubmit">
        <button type="submit" onclick="window.electronAPI.updateEvent('Spec Table')" id="btn">
            <p id="btnText">Generate</p>
            <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                </svg>
            </div>
        </button>
        <button type="reset">Clear</button>
    </div>
</form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    var no = formProps.rows;
    const R = `<table frame="all" id="i09608397.1" pgwide="1">
    <tgroup align="center" cols="4">
    <colspec colname="col1" colwidth="0.24*"/>
    <colspec colname="col2" colwidth="0.24*"/>
    <colspec colname="col3" colwidth="0.77*"/>
    <colspec colname="col4" colwidth="2.74*"/>
    <thead>
    <row>
    <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-left-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Item</para></entry>
    <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Qty</para></entry>
    <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Part</para></entry>
    <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Specification Description</para></entry>
    </row>
    </thead>
    <tbody>`;
    const W = `</tbody>
    </tgroup>
    </table>`;
    let O = "";
        for( let i = 0; i < no; i++){
            O += "\n"+`<row valign="middle">
            <entry colname="col1"><para>` + (i+1) + `</para></entry>
            <entry colname="col2"><para></para></entry>
            <entry colname="col3"><para><cpn-id><partno></partno><cpn></cpn></cpn-id></para></entry>
            <entry align="left" colname="col4"><para></para></entry>
            </row>`+ "\n"; 
        }
      row = R+O+W;
      console.log(row);
      navigator.clipboard.writeText(row); 
    })
  });
  $("#pdt").click(function () {
    $(".body").html(`<div class="periodicals"><p>Periodicals</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").delay(200).show();
    $("video").hide();
    $(".pdt-btns").show();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".da-btns").hide();
  });
  $("#spec").click(function () {
    $(".body").html(`<div class="periodicals1"><p>Specifications</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.5s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.5s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".bug").hide();
    $(".pdt-btns").hide();
    $(".spec-btns").show();
    $(".da-btns").hide();
  });
  $("#da").click(function () {
    $(".body").html(`<div class="periodicals2"><p>D & A</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".pdt-btns").hide();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".da-btns").show();
    $("#weight").click(function () {
       $(".body").html(`<embed type="text/html" src="https://engineeringautomation.ecorp.cat.com/eatcui/PNWC/" 
          style="width: 100%;
                height: 100%;">`);
    });
  });
  $(".bt:eq(10)").click(function () {
    $(".body").html(`<form class="metric" id="form">
    <div class="metcontainer">
    <div class="toggle-container">
        <div class="toggle">
          <input type="checkbox" name="engtomet">
        </div>
        <div class="upright">
          <h3>Metric to English</h3>
        </div>
    </div>
      <div class="text">
        <div class="text-items"><p>Torque</p></div>
        <div class="text-items"><p>Length (mm)</p></div>
        <div class="text-items"><p>Length (cm)</p></div>
        <div class="text-items"><p>weight</p></div>
        <div class="text-items"><p>Temperature</p></div>
        <div class="text-items"><p>Flow</p></div>
        <div class="text-items"><p>pressure</p></div>
        <div class="text-items"><p>Volume</p></div>
      </div>
      <div class="metric-container">
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol">
          <div class="note">
            <h3>Note: Mention <font color= #ebece3>ft/in</font> along with values (Eg: <font color= #ebece3>15ft/15in</font>)</h3>
          </div>
        </div>
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1">
        </div>
        <div class="metric-items">
          <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1a">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1a">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value2" style="width:442px;">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value3">
          <div class="plus">
            <span>&plusmn</span>          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1b">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value4">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1c">
        </div>
        <div class="metric-items">
          <input type="text" placeholder="Enter value" name="value5">
          <div class="plus">
            <span>&plusmn</span>
          </div> 
          <input type="text" placeholder="Enter tolerance value" name="tol1d">
        </div>
        <div class="metric-items">
          <input type="text" name="value6" placeholder="Enter value" style="width:442px;">
        </div>
      </div>
  </div>
  <div class="msubmit-da">
      <button type="submit" onclick="window.electronAPI.updateEvent('Metric conversion-D&A')" id="btn">
          <p id="btnText">Generate</p>
          <div class="checked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
          </div>
      </button>
    <button type="reset">Clear</button>
  </div>
  </form> `);
    $(".body").css("background-image", "none");
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function(){
      btn.classList.remove("active");
      btnText.innerHTML = "Generate";  
    }, (3*1000));
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
            formProps.cvalue = (formProps.value * 8.85074576738).toFixed(0);
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 8.85074576738).toFixed(0);
            }
            unit_torque = "in";
          } else {
            formProps.cvalue = (formProps.value * 0.737562149277).toFixed(0);
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 0.737562149277).toFixed();
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
  $("#bug").click(function (e) {
    if(confirm("Do you want to report a bug?")){
      window.location.href = "mailto:tamilarasan_thuyavan@cat.com?subject=Bug found in Automation Toolbox&body=**Please mention in detail about the bug you have encountered in the toolbox and attach screenshots (if possible)** ";
    }
  });
  $(".bt:eq(8)").click(function () {
    $(".body").html('<div class="logo"><img src="../img/EA_centerlogo.png" alt=""></div>');   
  });
});


