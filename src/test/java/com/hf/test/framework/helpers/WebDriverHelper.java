package com.hf.test.framework.helpers;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.hf.test.framework.helpers.utils.LogUtils;
import com.hf.test.step_definitions.api.ApiSteps;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;
public abstract class WebDriverHelper extends EventFiringWebDriver {
    private static LogUtils logger = new LogUtils(ApiSteps.class);
    private static RemoteWebDriver REAL_DRIVER = null;
    private static final Thread CLOSE_THREAD = new Thread() {

        @Override
        public void run() {
            REAL_DRIVER.quit();
        }
    };
    private static String BROWSER;
    private static String PLATFORM;
    private static String DRIVER_PATH;
    private static String DRIVER_ROOT_DIR;
    private static String SELENIUM_HOST;
    private static String SELENIUM_PORT;
    private static String SELENIUM_REMOTE_URL;
    private static String EXECUTION_TYPE;

    


    static {
        Props.loadRunConfigProps("/profile.properties");
        SELENIUM_HOST = Props.getProp("driverhost");
        SELENIUM_PORT = Props.getProp("driverport");
        PLATFORM = Props.getProp("platform");
        BROWSER = Props.getProp("browser");
        DRIVER_ROOT_DIR = Props.getProp("driver.root.path");
        EXECUTION_TYPE = Props.getProp("executiontype");


        if (!DRIVER_ROOT_DIR.equals("DEFAULT_PATH")) {
            System.setProperty("webdriver.gecko.driver",getDriverPath());
            System.setProperty("webdriver.chrome.driver", getDriverPath());
            System.setProperty("webdriver.ie.driver", getDriverPath());
            System.setProperty("phantomjs.binary.path", getDriverPath());


        }

        try {
            switch (BROWSER.toLowerCase()) {
                case ("chrome"):
                    startChromeDriver();
                    break;
                case ("firefox"):
                    startFireFoxDriver();
                    break;
                case ("iexplore"):
                    startIEDriver();
                    break;
                case ("phantomjs"):
                    startPhantomJsDriver();
                    break;
                default:
                    throw new IllegalArgumentException("Browser " + BROWSER + " or Platform "
                            + PLATFORM + " type not supported");
            }
            resizeBrowserWindow();

        } catch (IllegalStateException e) {
        	logger.error("Error starting browser");
        }
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
    }

    private WebDriverHelper() {
        super(REAL_DRIVER);
    }

    private static String getDriverPath() {
        DRIVER_PATH = Props.getProp("driver.root.path");
        return DRIVER_PATH;
    }

    private static void startIEDriver() {
        DesiredCapabilities capabilities = getInternetExploreDesiredCapabilities();
        if (SELENIUM_HOST == null || SELENIUM_HOST.isEmpty() ||!EXECUTION_TYPE.equals("GRID"))
            REAL_DRIVER = new InternetExplorerDriver(capabilities);
        else {
            try {
                REAL_DRIVER = getRemoteWebDriver(capabilities);
            } catch (MalformedURLException e) {
                //LOG.error(SELENIUM_REMOTE_URL + " Error " + e.getMessage());
            }
        }
       // REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
    }

    private static void startFireFoxDriver() {
        DesiredCapabilities capabilities = getFireFoxDesiredCapabilities();
        if (SELENIUM_HOST == null || SELENIUM_HOST.isEmpty()||!EXECUTION_TYPE.equals("GRID"))
            REAL_DRIVER = new FirefoxDriver();
        else {
            try {
                REAL_DRIVER = getRemoteWebDriver(capabilities);
            } catch (MalformedURLException e) {
            	 logger.error(SELENIUM_REMOTE_URL + " Error " + e.getMessage());
            }
        }
     //   REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
    }

    private static void startPhantomJsDriver() {
        DesiredCapabilities capabilities = getPhantomJsCapabilities();
        if (SELENIUM_HOST == null || SELENIUM_HOST.isEmpty()||!EXECUTION_TYPE.equals("GRID"))
            REAL_DRIVER = new PhantomJSDriver(capabilities);
        else {
            try {
                REAL_DRIVER = getRemoteWebDriver(capabilities);
            } catch (MalformedURLException e) {
            	 logger.error(SELENIUM_REMOTE_URL + " Error " + e.getMessage());
            }
        }
      //  REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
    }

    private static WebDriver startChromeDriver() {
        DesiredCapabilities capabilities = getChromeDesiredCapabilities();

        if (SELENIUM_HOST == null || SELENIUM_HOST.isEmpty()||!EXECUTION_TYPE.equals("GRID"))
            REAL_DRIVER = new ChromeDriver(
                    ChromeDriverService.createDefaultService(), capabilities);
        else {
            try {
                REAL_DRIVER = getRemoteWebDriver(capabilities);
            } catch (Exception e) {
          //      logger.error(SELENIUM_REMOTE_URL + " Error " + e.getMessage());
            }
        }
     //   REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
        return REAL_DRIVER;
    }

    private static DesiredCapabilities getChromeDesiredCapabilities() {

        LoggingPreferences logs = new LoggingPreferences();
        logs.enable(LogType.DRIVER, Level.OFF);
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logs);
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--disable-extensions");
        chromeOptions.addArguments("--disable-web-security");
        chromeOptions.addArguments("--test-type");
        capabilities.setCapability("chrome.verbose", false);
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        return capabilities;
    }

    private static DesiredCapabilities getFireFoxDesiredCapabilities() {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        capabilities.setBrowserName("firefox");

        capabilities.setCapability("disable-restore-session-state", true);
        return capabilities;

    }

    private static DesiredCapabilities getInternetExploreDesiredCapabilities() {
        LoggingPreferences logs = new LoggingPreferences();
        logs.enable(LogType.DRIVER, Level.OFF);
        DesiredCapabilities capabilities = DesiredCapabilities
                .internetExplorer();
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logs);
        capabilities
                .setCapability(
                        InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,
                        true);
        capabilities.setVersion("9");
        return capabilities;
    }

    private static DesiredCapabilities getPhantomJsCapabilities() {
        LoggingPreferences logs = new LoggingPreferences();
        logs.enable(LogType.DRIVER, Level.OFF);
        DesiredCapabilities capabilities = DesiredCapabilities.phantomjs();
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logs);
        capabilities
                .setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, getDriverPath());
        return capabilities;
    }


    private static RemoteWebDriver getRemoteWebDriver(DesiredCapabilities capabilities) throws MalformedURLException {
        SELENIUM_REMOTE_URL = "http://" + SELENIUM_HOST + ":" + SELENIUM_PORT + "/wd/hub";
        logger.detail(SELENIUM_REMOTE_URL + " Checking Selenium Remote URL");
        return new RemoteWebDriver(new URL(SELENIUM_REMOTE_URL), (capabilities));
    }

    public static WebDriver getWebDriver() {
        return REAL_DRIVER;
    }

    public static void resizeBrowserWindow() {
        getWebDriver().manage().window().maximize();;
    }

    @Override
    public void close() {
        if (Thread.currentThread() != CLOSE_THREAD) {
            throw new UnsupportedOperationException(
                    "You shouldn't close this WebDriver. It's shared and will close when the JVM exits.");
        }
        super.close();
    }
}
