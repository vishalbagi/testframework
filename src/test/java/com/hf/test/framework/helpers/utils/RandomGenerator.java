package com.hf.test.framework.helpers.utils;

import com.google.common.base.CharMatcher;
import com.hf.test.enums.PermittedCharacters;
import com.hf.test.framework.helpers.ScenarioContext;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;

import org.joda.time.DateTime;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

public final class RandomGenerator {
    private static LogUtils logger = new LogUtils(RandomGenerator.class);

    public static String random(Integer length, PermittedCharacters permittedCharacters) {
        String randomString = null;
        if (PermittedCharacters.ALPHABETS.equals(permittedCharacters)) {
            randomString = randomString(length);
        } else if (PermittedCharacters.NUMERIC.equals(permittedCharacters)) {
            randomString = randomInteger(length);
        } else if (PermittedCharacters.ALPHANUMERIC.equals(permittedCharacters)) {
            randomString = randomAlphanumeric(length);
        } else if (PermittedCharacters.ANY_CHARACTERS.equals(permittedCharacters)) {
            randomString = randomAsciiCharacters(length);
        } else if (PermittedCharacters.ANY_CHARACTERS_SUPPORTS_MULTILINGUAL.equals(permittedCharacters)) {
            randomString = randomAsciiCharacters(length);
        }
        logger.detail("Random value generated for type :"+permittedCharacters+"is "+randomString);
        return randomString;
    }

    /**
     * Generates random Number.
     *
     */
    private static String randomInteger(Integer length) {
        return RandomStringUtils.randomNumeric(length);
    }
    public static Integer randomIntegerInRange(Integer startRange,Integer endRange) {
        return RandomUtils.nextInt(startRange, startRange);
    }
    /**
     * Generates random String.
     *
     */
    private static String randomString(Integer length) {
        return RandomStringUtils.random(length, true, false);
    }

    /**
     * Generates random alphanumeric String.
     *
     * @param length length of random alphanumeric characters to be generated
     */
    private static String randomAlphanumeric(Integer length) {
        return RandomStringUtils.randomAlphanumeric(length);
    }

    /**
     * Generates random alphabetic String.
     *
     * @param length length of random alphabetic characters to be generated
     */
    public static String randomAlphabetic(Integer length) {
        return RandomStringUtils.randomAlphabetic(length);
    }


    public static String randomEmailAddress(Integer length) {
        String email = randomAlphanumeric(length) + "@Testexample.com";
        return email.toLowerCase();
    }




    public static DateTime randomAdultsDOB() {
        DateTime dateTime = new DateTime();
        dateTime = dateTime.minusYears((int) (18 + (Math.random() * ((50 - 18) + 1))));
        return dateTime.minusYears((int) (18 + (Math.random() * ((50 - 18) + 1))));
    }

    public static String dateWithNoLeadingZero(String dateWithLeadingZero) {
        String dateWithNoLeadingZero;
        dateWithNoLeadingZero = CharMatcher.is('0').trimLeadingFrom(dateWithLeadingZero);
        return dateWithNoLeadingZero;
    }

    private static String randomAsciiCharacters(Integer characterAmount) {
        return RandomStringUtils.random(characterAmount, 32, 127, false, false);
    }

}