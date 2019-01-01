package com.hf.test.framework.helpers.utils;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.apache.log4j.xml.DOMConfigurator;

public class LogUtils {

    /**
     * Overloaded constructor to initialize owner
     * 
     * @param owner
     *            value of owner
     */
    public LogUtils(Object owner) {
        this.owner = owner;
    }

    public void initialize(String configFile) throws Exception {
        if (logInitialized == false) {
            try {

                  PropertyConfigurator.configure("\\src\\main\\resources\\log4j.properties");

            	
            } catch (Exception e) {
                handleError("Error in loading configuration", configFile, e);
            }
            logInitialized = true;
        }
    }


    /**
     * Default constructor
     */
    public LogUtils() {
        this("<Null>");
    }

    /**
     * Logs arguments as debug
     * 
     * @param varargs
     *            object of arguments
     */
    public void debug(Object... varargs) {
        logger.debug(owner + DELIM + toString(varargs));
    }

    /**
     * Logs arguments as trace
     * 
     * @param varargs
     *            object of arguments
     */
    public void trace(Object... varargs) {
        logger.trace(owner + DELIM + toString(varargs));
    }

    /**
     * Logs arguments as detail
     * 
     * @param varargs
     *            object of arguments
     */
    public void detail(Object... varargs) {
        logger.info(owner + DELIM + toString(varargs));
    }

    /**
     * Logs arguments as warning
     * 
     * @param varargs
     *            object of arguments
     */
    public void warning(Object... varargs) {
        logger.warn(owner + DELIM + toString(varargs));
    }

    /**
     * Logs arguments as error
     * 
     * @param varargs
     *            object of arguments
     */
    public void error(Object... varargs) {
        logger.error(owner + DELIM + toString(varargs));

    }

    /**
     * Handles error and logs arguments
     * 
     * @param msg
     *            text message for exception
     * @param varargs
     *            object of arguments
     * @throws Exception 
     */
    public void handleError(String msg, Object... varargs) throws Exception {
        Exception rootCause = null;
        if (varargs.length != 0) {
            if (varargs[0] instanceof Exception) {
                rootCause = (Exception) varargs[0];
            }
        }
        String text = "Error: " + msg + DELIM + toString(varargs);
        error(text);

        // Do **not** repeatedly log framework exception's
        if (rootCause != null ) {
            error(msg, rootCause.getStackTrace());
        }

        throw new Exception() ;
    }

    /**
     * TODO: public void handleError(String msg, Exception exception, Object...
     * varargs) Useful in highlighting root cause
     */

    /**
     * Rethrow an exception after due logging
     * 
     * @param msg
     *            text message for exception
     * @param exception
     *            object of FrameworkException
     * @throws Exception 
     */
    public void handleError(String msg) throws Exception {
        error("Error: " + msg + DELIM + "Re-throwing exception");
        throw new Exception() ;
    }

    private static final String DELIM = "|";

    private static String toString(Object... varargs) {
        String s = "", delim = "";
        for (Object obj : varargs) {
            s += delim + obj.toString();
            delim = DELIM;
        }
        return s;
    }


    private Logger logger = Logger.getLogger(this.getClass());
    private static boolean logInitialized = false;
    private Object owner;
}
