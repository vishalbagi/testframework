package com.hf.test.framework.helpers.screenshot_helper;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import com.hf.test.framework.PageObject;
import com.hf.test.framework.helpers.ScenarioContext;
import com.hf.test.framework.helpers.utils.LogUtils;

import java.util.Map;

public class ScreenshotHook extends PageObject {

    private static LogUtils logger = new LogUtils(ScreenshotHook.class);

	
    @After("@web")
    public void embedScreenshot(Scenario scenario) {
    	try {
            Map<String, Object> screenShots = ScreenshotHelper.getScreenShotsForCurrentTest();
            for (Map.Entry<String, Object> screenShot : screenShots.entrySet()) {
                scenario.write(screenShot.getKey());
                scenario.embed((byte[]) screenShot.getValue(), "image/png");
            }

            ScreenshotHelper.tidyUpAfterTestRun();

            if (scenario.isFailed()) {
            	logger.detail("Getting Screenshot as test scenario is failed");

                scenario.write(getWebDriver().getCurrentUrl());
                byte[] screenShot = ((TakesScreenshot) getWebDriver()).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenShot, "image/png");
            }

        } catch (WebDriverException | ClassCastException e) {
        	logger.error(e.getMessage());
        } finally {
            getWebDriver().switchTo().defaultContent();
        }
    }
}
