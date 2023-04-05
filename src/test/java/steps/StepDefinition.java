package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import page.BasePage;
import page.BackgroundPage;

public class StepDefinition extends BasePage {

	BackgroundPage backgroundPage;

	@Before
	public void beforerun() {
		initDriver();
		backgroundPage = PageFactory.initElements(driver, BackgroundPage.class);
	}

	@Given("{string} button exists")
	public void button_exists(String button) {
		if (button.equalsIgnoreCase("Set Skyblue Background")) {
			System.out.println("SkyBlueBackground Button Exists");
		} else if (button.equalsIgnoreCase("Set SkyWhite Background")) {
			System.out.println("Set SkyWhite Background Button  Exists");

		}

	}

	@When("I click on the button")
	public void i_click_on_the_button() {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("the background color will change to sky blue")
	public void the_background_color_will_change_to_sky_blue() {
		backgroundPage.ClickSkyBlueBackground();
		takeScreenshot(driver);
		System.out.println("SkyBlueBackgroundColorChange");

	}

	@Then("the background color will change to white")
	public void the_background_color_will_change_to_white() {
		backgroundPage.ClickSkyWhiteBackground();
		takeScreenshot(driver);
		System.out.println("WhiteBackgroundColorChange");
	}

	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}

}
