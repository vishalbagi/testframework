package com.hf.test.framework;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.hf.test.framework.helpers.ScenarioContext;
import com.hf.test.framework.helpers.WebDriverHelper;
import com.hf.test.framework.helpers.utils.LogUtils;

import java.util.List;

public class PageObject {
    private static final long DRIVER_WAIT_TIME = 45;
    private static LogUtils logger = new LogUtils(PageObject.class);

    protected WebDriverWait wait;
    protected WebDriver webDriver;
    protected ScenarioContext scenariocontext;
    
    public PageObject() {
    	this.webDriver= WebDriverHelper.getWebDriver();
        this.wait = new WebDriverWait(webDriver, DRIVER_WAIT_TIME);
		PageFactory.initElements(this.webDriver, this);
    }

	public void SendKeys(By locator,String text){
		getWebDriver().findElement(locator).sendKeys(text);
		logger.detail("Send  "+text+" in locator"+locator.toString());
	}
	
	public void Click(By locator){
		
		waitForExpectedElement(locator).click();
		logger.detail("Click on locator "+locator.toString());
	}
	
	public void Clear(By locator){
		waitForExpectedElement(locator).clear();
		logger.detail("Clear text in locator "+locator.toString());
	}
	
	public String GetText(By locator){
		String elementText=waitForExpectedElement(locator).getText();
		logger.detail("text in locator "+locator.toString() +" is "+elementText);
		return elementText;
	}
	
	public boolean isDisplayed(By locator)
	{	boolean isDisplayed=waitForExpectedElement(locator).isDisplayed();
		logger.detail("Locator "+locator.toString() +" is displayed :"+isDisplayed);

		return isDisplayed;
	}
	
	public void selectDropDown(By locator,String text){
		new Select(waitForExpectedElement(locator)).selectByVisibleText(text);
	}
	
	public void selectDropDownByValue(By locator,String text){
		new Select(waitForExpectedElement(locator)).selectByValue(text);
	}
	
	public void Click(WebElement Element){
		
		Element.click();
		//getWebDriver().findElement(locator).click();
	}
    /**
     * Returns the current Url from page
     **/
    public String getCurrentUrl() {
        return webDriver.getCurrentUrl();
    }
    public WebDriver getWebDriver(){
    	return webDriver;
    }
    public void setWebDriver(WebDriver driver){
    	this.webDriver =driver;
    }
    /**
     * Returns the current page title from page
     */
    public String getCurrentPageTitle() {
        return getWebDriver().getTitle();
    }

    /**
     * An expectation for checking the title of a page.
     *
     */
    public boolean checkPageTitle(String title) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.titleIs(title));
    }

    /**
     * An expectation for checking that the title contains a case-sensitive
     * substring
     *
     * @param title the fragment of title expected
     * @return true when the title matches, false otherwise
     */
    public boolean checkPageTitleContains(String title) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.titleContains(title));
    }

    /**
     * An expectation for the URL of the current page to be a specific url.
     *
     */
    public boolean checkPageUrlToBe(String url) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.urlToBe(url));
    }

    /**
     * An expectation for the URL of the current page to contain specific text.
     *
     */
    public boolean checkPageUrlContains(String fraction) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.urlContains(fraction));
    }

    /**
     * Expectation for the URL to match a specific regular expression
     *
     */

    public boolean checkPageUrlMatches(String regex) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.urlMatches(regex));
    }

    /**
     * Find the dynamic element wait until its visible
     *
     * @param by Element location found by css, xpath, id etc...
     **/
    protected WebElement waitForExpectedElement(final By by) {
    	WebElement element= wait.until(visibilityOfElementLocated(by));
    	ScrollToWebElement(element);
    	return element;
    }


    private void ScrollToWebElement(WebElement element)
    {
        try
        {
            JavascriptExecutor executor = (JavascriptExecutor)getWebDriver();
            executor.executeScript("arguments[0].scrollIntoView({behavior: 'instant', block: 'center', inline: 'nearest'});", element);
        }
        catch (Exception e)
        {
        	logger.error("Not able to scroll to element "+e.getMessage());
        }
        
    }
    /**
     * Find the dynamic element wait until its visible for a specified time
     *
     * @param by                Element location found by css, xpath, id etc...
     * @param waitTimeInSeconds max time to wait until element is visible
     **/

    public WebElement waitForExpectedElement(final By by, long waitTimeInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(getWebDriver(), waitTimeInSeconds);
            return wait.until(visibilityOfElementLocated(by));
        } catch (NoSuchElementException e) {
        	logger.detail(e.getMessage());
            return null;
        } catch (TimeoutException e) {
        	logger.detail(e.getMessage());
            return null;
        }
    }

    private ExpectedCondition<WebElement> visibilityOfElementLocated(final By by) throws NoSuchElementException {
        return driver -> {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
            	logger.detail(e.getMessage());
            }
            WebElement element = getWebDriver().findElement(by);
        //    return element.isDisplayed() ? element : null;
            return element.isEnabled() ? element : null;
        };
    }


    /**
     * An expectation for checking if the given text is present in the element that matches
     * the given locator.
     */
    public boolean textToBePresentInElementLocated(final By by, final String text) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.textToBePresentInElementLocated(by, text));
    }


    /**
     * An expectation for checking if the given text is present in the specified
     * elements value attribute.
	*/
    public boolean textToBePresentInElementValue(final WebElement element, final String text) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.textToBePresentInElementValue(element, text));
    }

    /**
     * An expectation for checking if the given text is present in the specified element.
     *
     */
    public boolean textToBePresentInElement(WebElement element, String text) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.textToBePresentInElement(element, text));
    }

    /**
     * An expectation for checking if the given text is present in the specified
     * elements value attribute.
     *
     */
    public boolean textToBePresentInElementValue(final By by, final String text) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.textToBePresentInElementValue(by, text));
    }


    /**
     * An expectation for checking whether the given frame is available to switch
     * to. <p> If the frame is available it switches the given driver to the
     * specified frame.
     *
     */
    public WebDriver frameToBeAvailableAndSwitchToIt(final String frameLocator) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(frameLocator));
    }


    /**
     * An expectation for checking whether the given frame is available to switch
     * to. <p> If the frame is available it switches the given driver to the
     * specified frame.
     *
     * @param by used to find the frame
     */
    public WebDriver frameToBeAvailableAndSwitchToIt(final By by) {
        return new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(by));
    }


    /**
     * An expectation for checking that an element is either invisible or not
     * present on the DOM.
     *
     * @param by used to find the element
     */
    public boolean invisibilityOfElementLocated(By by) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.invisibilityOfElementLocated(by));
    }

    /**
     * An expectation for checking that an element with text is either invisible
     * or not present on the DOM.
     *
     */
    public boolean invisibilityOfElementWithText(final By by, final String text) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.invisibilityOfElementWithText(by, text));
    }


    /**
     * An expectation for checking an element is visible and enabled such that you
     * can click it.
     *
     */
    public WebElement elementToBeClickable(By by) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementToBeClickable(by));
    }


    /**
     * An expectation for checking an element is visible and enabled such that you
     * can click it.
     */

    public WebElement elementToBeClickable(final WebElement element) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementToBeClickable(element));
    }


    /**
     * Wait until an element is no longer attached to the DOM.
     *
     * @param element The element to wait for.
     * @return false is the element is still attached to the DOM, true
     * otherwise.
     */
    public boolean stalenessOf(final WebElement element) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.stalenessOf(element));
    }

    /**
     * An expectation for checking if the given element is selected.
     */
    public boolean elementToBeSelected(final By by) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementToBeSelected(by));
    }

    /**
     * An expectation for checking if the given element is selected.
     */
    public boolean elementToBeSelected(final WebElement element) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementToBeSelected(element));
    }

    /**
     * An expectation for checking if the given element is selected.
     */
    public boolean elementSelectionStateToBe(final WebElement element, final boolean selected) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementSelectionStateToBe(element, selected));
    }

    /**
     * An expectation for checking if the given element is selected.
     */
    public boolean elementSelectionStateToBe(final By by,
                                             final boolean selected) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.elementSelectionStateToBe(by, selected));
    }

    public void waitForAlert() {
        (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.alertIsPresent());
    }

    /**
     * An expectation for checking that all elements present on the web page that
     * match the locator are visible. Visibility means that the elements are not
     * only displayed but also have a height and width that is greater than 0.
     *
     */
    public List<WebElement> visibilityOfAllElementsLocatedBy(final By by) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(by));
    }


    /**
     * An expectation for checking that all elements present on the web page that
     * match the locator are visible. Visibility means that the elements are not
     * only displayed but also have a height and width that is greater than 0.
     *
     * @param elements list of WebElements
     * @return the list of WebElements once they are located
     */
    public List<WebElement> visibilityOfAllElements(final List<WebElement> elements) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.visibilityOfAllElements(elements));
    }


    /**
     * An expectation for checking that there is at least one element present on a
     * web page.
     *
     * @param by used to find the element
     * @return the list of WebElements once they are located
     */
    public List<WebElement> presenceOfAllElementsLocatedBy(final By by) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.presenceOfAllElementsLocatedBy(by));
    }

    /**
     * An expectation for checking that an element, known to be present on the DOM
     * of a page, is visible. Visibility means that the element is not only
     * displayed but also has a height and width that is greater than 0.
     */

    public WebElement visibilityOf(final WebElement element) {
        return (new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME)).until(ExpectedConditions.visibilityOf(element));
    }


    /**
     * An expectation for checking that an element is present on the DOM of a
     * page. This does not necessarily mean that the element is visible.
     *
     */
    public boolean isElementPresent(final By by) {
        try {
            new WebDriverWait(getWebDriver(), DRIVER_WAIT_TIME).until(ExpectedConditions.presenceOfElementLocated(by));

        } catch (TimeoutException exception) {
            //LOG.info(exception.getMessage());
            return false;
        }
        return true;
    }


    public WebDriver getBrowserByPageTitle(String pageTitle) {
        for (String windowHandle : webDriver.getWindowHandles()) {
            webDriver = webDriver.switchTo().window(windowHandle);
            if (pageTitle.equalsIgnoreCase(webDriver.getTitle())) {
                return webDriver;
            }
        }
        return null;
    }


    public void navigateToPreviousPageUsingBrowserBackButton() {
        webDriver.navigate().back();
    }

    public void clickWithinElementWithXYCoordinates(WebElement webElement, int x, int y) {
        Actions builder = new Actions(webDriver);
        builder.moveToElement(webElement, x, y);
        builder.click();
        builder.perform();
    }

    public String getElementByTagNameWithJSExecutor(String tagName) {
        return ((JavascriptExecutor) webDriver).executeScript("return window.getComputedStyle(document.getElementsByTagName('" + tagName + "')").toString();
    }

    public String getElementByQueryJSExecutor(String cssSelector) {
        return ((JavascriptExecutor) webDriver).executeScript("return window.getComputedStyle(document.querySelector('" + cssSelector + "')").toString();
    }

    /**
     * Wrapper for driver.findElement
     *
     **/
    protected WebElement element(final By by) {
        return getWebDriver().findElement(by);
    }

    /**
     * Wrapper for clear data and sendKeys in Input Text box
     *
     **/

    protected void clearEnterText(By by, String inputText) {
        element(by).clear();
        element(by).sendKeys(inputText);
    }

    /**
     * Wrapper for wait, clear data and sendKeys in Input Text box
     **/
    protected void waitClearEnterText(By by, String inputText) {
        waitForExpectedElement(by).clear();
        element(by).sendKeys(inputText);

    }


}