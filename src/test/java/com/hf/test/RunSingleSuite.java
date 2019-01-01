package com.hf.test;

import java.io.File;
import java.io.IOException;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import com.hf.test.ReportMerger;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.runtime.RuntimeOptions;


@CucumberOptions(features = "target/test-classes", monochrome = true, tags = "@sign_in", plugin = {
        "pretty", "html:target/cucumber-report/single",
        "json:target/cucumber-report/single/cucumber.json",
        "rerun:target/cucumber-report/single/rerun.txt"},
        glue = "com.hf.test")
public class RunSingleSuite extends AbstractTestNGCucumberTests {
	@BeforeSuite
	public static void start(){

	}
	
    @AfterSuite
    public static void setup() throws IOException {
    	/*	
    	System.out.println("In After Suite");

            File reportDirectory = new File(System.getProperty("LogFilePath"));
            if (reportDirectory.exists()) {
                ReportMerger munger = new ReportMerger();
                munger.mergeReports(reportDirectory);
            }
        */
    }
}
