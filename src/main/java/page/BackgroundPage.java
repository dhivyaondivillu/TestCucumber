package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BackgroundPage extends BasePage {

	WebDriver driver;

	public BackgroundPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
	WebElement SkyBlue_Background_Colour_Element;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	WebElement White_Background_Colour_Element;

	public void ClickSkyBlueBackground() {
		SkyBlue_Background_Colour_Element.click();
	}

	public void ClickSkyWhiteBackground() {
		White_Background_Colour_Element.click();
	}

}
