The framework incorporates design principle of BDD (Behaviour driven development) which promotes
 writing  tests by describing behaviour of application under test in simple english language from
 the perspective of its stakeholders. It can be run in parallel using cucumber.jvm.parallel plug in
 



Tools & libraries
=================
The test automation framework is comprised of following tools and libraries  

*Cucumber-JVM:- BDD Framework  
*Custom Page Object Pattern and utility functions  
*Selenium WebDriver: - Browser automation framework
*Selenium Grid: - Distribute test Execution across several machines  
*JAVA: - Programming language  
*TestNg: - TestNg Java testing framework  
*Maven: - Build tool  
*PicoContainer: - Standard Dependency Injection     
*Assert: - TestNg
*Loggers: - Log4j 
*Rest-Assured (optional): - Restful Api framework     

Machine Configuration
====================
*Java 8  
*Maven  



To run all tests parallel
------------------------
mvn clean install  

It will create test runner file using cucumber-jvm-parallel plug in and will run features in parallel. By added "parallelScheme>SCENARIO</parallelScheme>" tag, we can make scenario to run in parallel.

Configuration as stored as per profile in /src/main/resources/profile and active profile must be specified by "/src/main/resources/profile.properties". In profile you can specify if you want to run test in grid or stand alone. You need to specify browser and full path of browser driver in same file

Report
======

Report Will be Stored in new directory in /Reports folder. It will have folder corresponding to parallel threads and will have 
consolidated index file. Screenshot will be automatically embeded in html file.

Logs
======
Log file Will be Stored in new directory in /Reports folder and will have name "Testlog_Time.log".This file will have logs according to time. Generating logs as per thread is still a pending task

	
	
	
