$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SkyBlue.feature");
formatter.feature({
  "name": "Background  colour Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Backgroundcolour"
    }
  ]
});
formatter.scenario({
  "name": "Sky Blue Background",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Backgroundcolour"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.button_exists(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.i_click_on_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SkyWhite.feature");
formatter.feature({
  "name": "Background  colour Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Backgroundcolour"
    }
  ]
});
formatter.scenario({
  "name": "White Background Change",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Backgroundcolour"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.button_exists(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.i_click_on_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});