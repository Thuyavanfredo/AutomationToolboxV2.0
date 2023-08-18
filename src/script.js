$(document).ready(function () {
    $(".icon-expand:nth-child(1)").click(function () {
      $(".body").html("");
      $(".body").css({
        "background-image":"url(../img/main_page_low.png)",
        "width": "814px",
        "height": "452px",
        "transform": "translateX(0px)",
        "transition":"all 0.5s linear",
      });
      $(".body").html(`
      <video class="video" id="video" poster="../img/sis2.0.png" src="../img/Introducing SIS 2.0.webmhd.webm"></video> 
      `)
      $(".pdt-btns").hide();
      $(".spec-btns").hide();
      $(".da-btns").hide();
    });
    $(".icon-expand:nth-child(2)").click(function () {
      var targetElement = document.getElementById('body');
      targetElement.className="body";
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
          "background-image":"none",
          "width": "814px",
          "height": "452px",
          "transform": "translateX(0px)",
          "transition":"all 0.5s linear",
        });
      $(".pdt-btns, .spec-btns").hide();
      $(".da-btns").hide();
      $(".video").hide();
    });
    $(".icon-expand:nth-child(3)").click(function () {
      var targetElement = document.getElementById('body');
      targetElement.className="body";
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
      "background-image":"none",
      "width": "814px",
      "height": "452px",
      "transform": "translateX(0px)",
      "transition":"all 0.5s linear",
    });
    $(".pdt-btns, .spec-btns").hide();
    $(".da-btns").hide();
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
                    <button type="submit">Generate</button>
                    <button type="reset">Clear</button>
                </div>
            </div> 
          </form>`);
      $("#form").submit(function (e) {
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
        const x = templates[formProps.Graphic].join(formProps.graphics);
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
          <button type="submit">Generate</button>
          <button type="reset">Clear</button>
      </div>
  </div> 
          </form>`);
      $("#form").submit(function (e) {
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
        const w = (templates[formProps.XREF]).split("IE");
        const x = w.join(formProps.IE);
        const y = x.split("ID");
        const z = y.join(formProps.ID);
        navigator.clipboard.writeText(z);
        console.log(z)
      });
      $(".submit button:nth-child(2)").click(function (e) {
        $("#form").trigger("reset");
      });
    });
    $(".bt:eq(3)").click(function () {
      $(".home").html(`<form class="metric" id="form">
          <div class="main">
              <div class="tol1">
                  <label>Torque</label>
                  <input  type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value">
                  <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
                  <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol">
                      <div class="toggle">
                          <input type="checkbox" name="engtomet">
                      </div>
              </div>
              <div class="tol2">
                  <label>Length (mm)</label>
                  <input  type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value"  name="value1">
                  <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
                  <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol1">
                  <div class="toggle">
                      <input type="checkbox" name="engtomet1">
                  </div>
              </div>
              <div class="tol3">
              <label>Length (cm)</label>
              <input  type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value"  name="value1a">
              <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
              <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol1a">
              <div class="toggle">
                  <input type="checkbox" name="engtomet2">
              </div>
          </div>
              <div class="met">
                  <label>Weight</label>
                  <input type="text" placeholder="Enter value" name="value2">
                  <div class="toggle">
                      <input type="checkbox" name="engtomet3">
                  </div>
              </div>
              <div class="tol6">
                  <label>Temperature</label>
                  <input  type="text" placeholder="Enter value" name="value3">
                  <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
                  <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol1b">
                  <div class="toggle">
                      <input type="checkbox" name="engtomet4">
                  </div>
              </div>
              <div class="tol4">
                  <label>Flow</label>
                  <input  type="text" placeholder="Enter value" name="value4">
                  <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
                  <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol1c">
                  <div class="toggle">
                      <input type="checkbox" name="engtomet5">
                  </div>
              </div>
              <div class="tol5">
                  <label>Pressure</label>
                  <input  type="text" placeholder="Enter value" name="value5">
                  <img class="plus" src="img/Plus_or_minus_symbol.svg.png" width= "36px" height= "46px" alt="">
                  <input class="input1"  type="text" placeholder="Enter tolerance value" name="tol1d">
                  <div class="toggle">
                      <input type="checkbox" name="engtomet6">
                  </div>
              </div>
              <div class="met">
                  <label>Volume</label>
                  <input  type="text" placeholder="Enter value" name="value6">
                  <div class="toggle">
                      <input type="checkbox" id="switch" name="engtomet7">
                  </div>
              </div>
          </div>
              <div class="bt1">
                  <button type="submit">Generate</button>
                  <button type="reset">Clear</button>
              </div>           
            </div>
            <div class="upright">
              <h3>Metric to English</h3>
            </div>
            <div class="note">
            <h3>Note: Mention <font color= yellow>ft/in</font> along with values (Eg: <font color= yellow>15ft/15in</font>)</h3>
          </div>
          </form>`);
      $(".home").css("background-image", "none");
      $("#form").submit(function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
        let texttocopy;
        let unit_torque;
        let unit_length;
        if (formProps.value) {
          if(formProps.engtomet){
                  if (formProps.value.includes("in")) {
                    formProps.value = formProps.value.replace("in", "");
                    formProps.tol = formProps.tol.replace("in", "");
                    formProps.cvalue = (formProps.value/8.85074576738).toFixed(
                      String(formProps.value).split(".")[1]&&String(formProps.value).split(".")[1].length
                    );
                    if (formProps.tol) {
                      formProps.ctolvalue = (formProps.tol/8.85074576738).toFixed(
                        String(formProps.tol).split(".")[1]&&String(formProps.tol).split(".")[1].length
                      );
                    }
                    unit_torque = "in";
                    texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                      formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
                    }N.m</metric><english>${formProps.value} ${
                      formProps.tol ? "± " + formProps.tol + " " : ""
                    }${unit_torque}</english></unitsgrp>`;
                  }
                  if (formProps.value.includes("ft")){
                    formProps.value = formProps.value.replace("ft", "");
                    formProps.tol = formProps.tol.replace("ft", "");
                    formProps.cvalue = (formProps.value/0.737562149277).toFixed(
                      String(formProps.value).split(".")[1]&&String(formProps.value).split(".")[1].length
                    );
                    if (formProps.tol) {
                      formProps.ctolvalue = (formProps.tol/0.737562149277).toFixed(
                        String(formProps.tol).split(".")[1]&&String(formProps.tol).split(".")[1].length
                      );
                  }
                  unit_torque="ft"
                  texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                    formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
                  }N.m</metric><english>${formProps.value} ${
                    formProps.tol ? "± " + formProps.tol + " " : ""
                  }${unit_torque}</english></unitsgrp>`;
                  }
                  texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${formProps.ctolvalue?"± "+formProps.ctolvalue+" ":""}N.m </metric><english>${formProps.value} ${formProps.tol?"± "+formProps.tol+" ":""}lb ${unit_torque}</english></unitsgrp>`
              }else{
                if (formProps.value <= 34) {
                  formProps.cvalue = (formProps.value * 8.85074576738).toFixed(
                    String(formProps.value).split(".")[1]&&String(formProps.value).split(".")[1].length
                  );
                  if (formProps.tol) {
                    formProps.ctolvalue = (formProps.tol * 8.85074576738).toFixed(
                      String(formProps.tol).split(".")[1]&&String(formProps.tol).split(".")[1].length
                    );
                  }
                  unit_torque = "in";
                } else {
                  formProps.cvalue = (formProps.value * 0.737562149277).toFixed(
                    String(formProps.value).split(".")[1]&&String(formProps.value).split(".")[1].length
                  );
                  if (formProps.tol) {
                    formProps.ctolvalue = (formProps.tol * 0.737562149277).toFixed(
                      String(formProps.tol).split(".")[1]&&String(formProps.tol).split(".")[1].length
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
        } else if (formProps.value1){
          if(formProps.engtomet1){
              if ((formProps.value1.includes(".")) && (formProps.tol1.includes("."))){
                formProps.cvalue = (formProps.value1/0.03937007874).toFixed(
                  String(formProps.value1).split(".")[1]&&String(formProps.value1).split(".")[1].length-1
                );
                formProps.ctolvalue = (formProps.tol1/0.03937007874).toFixed(
                  String(formProps.tol1).split(".")[1]&&String(formProps.tol1).split(".")[1].length-1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
                }mm</metric><english>${formProps.value1} ${
                  Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
                }inch</english></unitsgrp>`;
              }else{
                inputDecimal= ((formProps.value1.includes(".")) ? formProps.value1 : formProps.value1 + '.0');
                tolDecimal= ((formProps.tol1.includes(".")) ? formProps.tol1 : formProps.tol1 + '.0');
                formProps.cvalue = (inputDecimal/0.03937007874).toFixed(
                  String(inputDecimal).split(".")[1]&&String(inputDecimal).split(".")[1].length-1
                );
                formProps.ctolvalue = (tolDecimal/0.03937007874).toFixed(
                  String(tolDecimal).split(".")[1]&&String(tolDecimal).split(".")[1].length-1
                );
                texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                  Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
                }mm</metric><english>${inputDecimal} ${
                  Number(tolDecimal) ? "± " + tolDecimal + " " : ""
                }inch</english></unitsgrp>`;
                console.log(formProps.tol)
              }
          }else{
            if ((formProps.value1.includes(".")) && (formProps.tol1.includes("."))){
              formProps.cvalue = (formProps.value1 * 0.03937007874).toFixed(
                String(formProps.value1).split(".")[1]&&String(formProps.value1).split(".")[1].length+1
              );
              formProps.ctolvalue = (formProps.tol1 * 0.03937007874).toFixed(
                String(formProps.tol1).split(".")[1]&&String(formProps.tol1).split(".")[1].length+1
              );
              texttocopy = `<unitsgrp><metric>${formProps.value1} ${
                Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
              }mm</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }inch</english></unitsgrp>`;
            }else{
              inputDecimal= ((formProps.value1.includes(".")) ? formProps.value1 : formProps.value1 + '.0');
              tolDecimal= ((formProps.tol1.includes(".")) ? formProps.tol1 : formProps.tol1 + '.0');
              formProps.cvalue = (inputDecimal*0.03937007874).toFixed(
                String(inputDecimal).split(".")[1]&&String(inputDecimal).split(".")[1].length+1
              );
              formProps.ctolvalue = (tolDecimal*0.03937007874).toFixed(
                String(tolDecimal).split(".")[1]&&String(tolDecimal).split(".")[1].length+1
              );
              texttocopy = `<unitsgrp><metric>${inputDecimal} ${
                Number(tolDecimal) ? "± " + tolDecimal + " " : ""
              }mm</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }inch</english></unitsgrp>`;
            }
          }
        }else if (formProps.value1a){
          if(formProps.engtomet2){
            if ((formProps.value1a.includes(".")) && (formProps.tol1a.includes("."))){
              formProps.cvalue = (formProps.value1a/0.39370079).toFixed(
                String(formProps.value1a).split(".")[1]&&String(formProps.value1a).split(".")[1].length-1
              );
              formProps.ctolvalue = (formProps.tol1a/0.39370079).toFixed(
                String(formProps.tol1a).split(".")[1]&&String(formProps.tol1a).split(".")[1].length-1
              );
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }mm</metric><english>${formProps.value1a} ${
                Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
              }inch</english></unitsgrp>`;
            }else{
              inputDecimal= ((formProps.value1a.includes(".")) ? formProps.value1a : formProps.value1a + '.0');
              tolDecimal= ((formProps.tol1a.includes(".")) ? formProps.tol1a : formProps.tol1a + '.0');
              formProps.cvalue = (inputDecimal/0.39370079).toFixed(
                String(inputDecimal).split(".")[1]&&String(inputDecimal).split(".")[1].length-1
              );
              formProps.ctolvalue = (tolDecimal/0.39370079).toFixed(
                String(tolDecimal).split(".")[1]&&String(tolDecimal).split(".")[1].length-1
              );
              texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }mm</metric><english>${inputDecimal} ${
                Number(tolDecimal) ? "± " + tolDecimal + " " : ""
              }inch</english></unitsgrp>`;
            }
          }else{
            if ((formProps.value1a.includes(".")) && (formProps.tol1a.includes("."))){
              formProps.cvalue = (formProps.value1a * 0.39370079).toFixed(
                String(formProps.value1a).split(".")[1]&&String(formProps.value1a).split(".")[1].length+1
              );
              formProps.ctolvalue = (formProps.tol1a * 0.39370079).toFixed(
                String(formProps.tol1a).split(".")[1]&&String(formProps.tol1a).split(".")[1].length+1
              );
              texttocopy = `<unitsgrp><metric>${formProps.value1a} ${
                Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
              }cm</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }inch</english></unitsgrp>`;
            }else{
              inputDecimal= ((formProps.value1a.includes(".")) ? formProps.value1a : formProps.value1a + '.0');
              tolDecimal= ((formProps.tol1a.includes(".")) ? formProps.tol1a : formProps.tol1a + '.0');
              formProps.cvalue = (inputDecimal*0.39370079).toFixed(
                String(inputDecimal).split(".")[1]&&String(inputDecimal).split(".")[1].length+1
              );
              formProps.ctolvalue = (tolDecimal*0.39370079).toFixed(
                String(tolDecimal).split(".")[1]&&String(tolDecimal).split(".")[1].length+1
              );
              texttocopy = `<unitsgrp><metric>${inputDecimal} ${
                Number(tolDecimal) ? "± " + tolDecimal + " " : ""
              }cm</metric><english>${formProps.cvalue} ${
                Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
              }inch</english></unitsgrp>`;
            }
          }
        }else if (formProps.value2){
          if(formProps.engtomet3){
          formProps.cvalue=(formProps.value2/2.20462262).toFixed(
            String(formProps.value2).split(".")[1]&&String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} kg</metric><english>${formProps.value2} lb</english></unitsgrp>`
        }else{
          formProps.cvalue=(formProps.value2*2.20462262).toFixed(
            String(formProps.value2).split(".")[1]&&String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.value2} kg</metric><english>${formProps.cvalue} lb</english></unitsgrp>`
        }
      }else if (formProps.value3){
        if (formProps.engtomet4){
          formProps.cvalue=((formProps.value3-32)*(0.555555555555556)).toFixed(
            String(formProps.value3).split(".")[1]&&String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
          formProps.ctolvalue = ((formProps.tol1b-32)*(0.555555555555556)).toFixed(
            String(formProps.tol1b).split(".")[1]&&String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy= `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          } °C</metric><english>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°F</english></unitsgrp>`
        }else{
          formProps.cvalue=((formProps.value3*1.8)+32).toFixed(
            String(formProps.value3).split(".")[1]&&String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
          formProps.ctolvalue = ((formProps.tol1b*1.8)+32).toFixed(
            String(formProps.tol1b).split(".")[1]&&String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy= `<unitsgrp><metric>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°C</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""}°F</english></unitsgrp>`
            }
      }else if (formProps.value4){
        if (formProps.engtomet5){
          formProps.cvalue=(formProps.value4 * 3.785412).toFixed(
            String(formProps.value4).split(".")[1]&&String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
          formProps.ctolvalue = (formProps.value4 * 3.785412).toFixed(
            String(formProps.tol1c).split(".")[1]&&String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy= `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</metric><english>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</english></unitsgrp>`
        }else{
          formProps.cvalue=(formProps.value4 * 0.264172).toFixed(
            String(formProps.value4).split(".")[1]&&String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
          formProps.ctolvalue = (formProps.value4 * 0.264172).toFixed(
            String(formProps.tol1c).split(".")[1]&&String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy= `<unitsgrp><metric>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</english></unitsgrp>`
            }
    }else if (formProps.value5){
      if (formProps.engtomet6){
        formProps.cvalue=(formProps.value5 * 6.89475727999991).toFixed(
          String(formProps.value5).split(".")[1]&&String(formProps.value5).split(".")[1].length
        );
        if (formProps.tol1d) {
        formProps.ctolvalue = (formProps.value5 * 6.89475727999991).toFixed(
          String(formProps.tol1d).split(".")[1]&&String(formProps.tol1d).split(".")[1].length
          );
        }
        texttocopy= `<unitsgrp><metric>${formProps.cvalue} ${
          Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
        }kPa</metric><english>${formProps.value5} ${
          Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
        }psi</english></unitsgrp>`
      }else{
        formProps.cvalue=(formProps.value5 * 0.14503773800722).toFixed(
          String(formProps.value5).split(".")[1]&&String(formProps.value5).split(".")[1].length
        );
        if (formProps.tol1d) {
        formProps.ctolvalue = (formProps.value5 * 0.14503773800722).toFixed(
          String(formProps.tol1d).split(".")[1]&&String(formProps.tol1d).split(".")[1].length
          );
        }
        texttocopy= `<unitsgrp><metric>${formProps.value5} ${
          Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
        }kPa</metric><english>${formProps.cvalue} ${
          Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
        }psi</english></unitsgrp>`
          }
    }else if (formProps.value6){
      if (formProps.engtomet7){
        formProps.cvalue=(formProps.value6 * 3.78541).toFixed(
          String(formProps.value6).split(".")[1]&&String(formProps.value6).split(".")[1].length
        );
        texttocopy= `<unitsgrp><metric>${formProps.cvalue} L</metric><english>${formProps.value6} US gal</english></unitsgrp>`
      }else{
        formProps.cvalue=(formProps.value6 * 0.264172).toFixed(
          String(formProps.value6).split(".")[1]&&String(formProps.value6).split(".")[1].length
        );
        texttocopy= `<unitsgrp><metric>${formProps.value6} L</metric><english>${formProps.cvalue} US gal</english></unitsgrp>`
          }
    }
        navigator.clipboard.writeText(texttocopy);
        $(".modalopen a").click()
      });
      $(".bt1 button:nth-child(2)").click(function (e) {
        $("#form").trigger("reset");
        $(".upright h3").text("Metric to English");
        $(".upright h3").css("color","#999999");
        $(".note h3").css("display","none")
        $(".toggle input").attr("checked", false);
  
      });
      $(".toggle input").change(function(e){
        if($(this).is(":checked")){
          $(".upright h3").text("English to Metric")
          $(".upright h3").css("color","#ca9800")
          $(".note h3").css("display","block")
          $(".toggle input").attr("checked", true)
        }else{
          $(".upright h3").text("Metric to English")
          $(".upright h3").css("color","#999999")
          $(".note h3").css("display","none")
          $(".toggle input").attr("checked", false)
        }
      })
    });
    $(".bt:eq(4)").click(function () {
      $(".home").html("");
      $(".home").css("background-image", "url(img/main.jpg)");
    });
    $(".bt:eq(5)").click(function () {
      $(".home").html("");
      $(".home").css("background-image", "url(img/main.jpg)");
    });
    $(".spec-btns").click(function () {
      $(".pdt-body").html(`<form>
            <div class="form">
                <div class=".textarea"><textarea placeholder="Paste PDF content here"></textarea></div>
                <div class=".textarea"><textarea placeholder="Paste Excel content here"></textarea></div>
            </div>
  </form>`);
    $(".pdt-body").css("background-image", "none");
    });
    $("#pdt").click(function () {
      $(".body").html("");
      $(".body").css({
          "background-image": "none",
          "width": "626px",
          "height": "426px",
          "transition":"all 0.5s linear",
          "transform": "translateX(180px)"
      });
      $("video").hide();
      $(".pdt-btns").show();
      $(".spec-btns").hide();
      $(".da-btns").hide();
    });
    $("#spec").click(function () {
      $(".body").html("");
      $(".body").css({
          "background-image": "none",
          "width": "626px",
          "height": "426px",
          "transition":"all 0.5s linear",
          "transform": "translateX(180px)",
      });
      $("video").hide();
      $(".pdt-btns").hide();
      $(".spec-btns").show();
      $(".da-btns").hide();
    });
    $("#da").click(function () {
      $(".body").html("");
      $(".body").css({
          "background-image": "none",
          "width": "626px",
          "height": "426px",
          "transition":"all 0.5s linear",
          "transform": "translateX(180px)",
      });
      $("video").hide();
      $(".pdt-btns").hide();
      $(".spec-btns").hide();
      $(".da-btns").show();
    });
});
  