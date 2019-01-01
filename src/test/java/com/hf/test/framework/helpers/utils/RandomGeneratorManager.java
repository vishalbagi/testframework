package com.hf.test.framework.helpers.utils;

import com.hf.test.enums.PermittedCharacters;

public class RandomGeneratorManager {
	 static Integer RANDOM_LENGTH=6;
	 public static Object getData(String inputString ,Integer ... limit){
		 Object output=null;
		 Integer RandomSize=limit.length>0?limit[0]:RANDOM_LENGTH;
		 
		 switch(inputString){
		 case "{RANDOM_STRING}":
			 output= RandomGenerator.random(RandomSize, PermittedCharacters.ALPHABETS);
			 break;
		 case "{RANDOM_APLHANUM}":
			 output= RandomGenerator.random(RandomSize, PermittedCharacters.ALPHANUMERIC);
			 break;
		 case "{RANDOM_EMAIL}":
			 output= RandomGenerator.randomEmailAddress(RandomSize);
			 break;
		 case "{RANDOM_PASTDATE}":
			 output= RandomGenerator.randomAdultsDOB();
			 break;
		 case "{RANDOM_NUM}":
			 output= RandomGenerator.random(RandomSize, PermittedCharacters.NUMERIC);
			 break;		
		 case "{RANDOM_NUM_IN_Range}":
			 output= RandomGenerator.randomIntegerInRange(1, RandomSize);
			 break;		
		default:
			output =inputString;
			 
		 }
		 return output;
	 }
}
