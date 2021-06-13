# myBelajar

![](https://img.shields.io/travis/react-tags/react-tags.svg) ![](https://img.shields.io/npm/v/react-tag-input.svg) 

### Table of Content
* **[Members Name](#members-name)**
* **[Introduction](#introduction)**
* **[objective](#objective)**
* **[Features and Functionalities](#features-and-functionalities)**
* **[Screen Navigation](#screen-navigation)**
* **[Sequence Diagram](#sequence-diagram)**
* **[User Interface](#user-interface)**
* **[Challenges and Difficulties](#challenges-and-difficulties)**
* **[References](#references)**

### Members Name

No | Name | Matric No
:---: | --- | :---:
1 | Mohamad Aniq Fakhrul bin Mohamad Fauzi | 1728571
2 | Mohammad Lokman Bin Azmi | 1720191
3 | Muhamad Nor Zakwan Bin Ismail | 1726259
4 | Muhammad Luqman Bin Mohamad Nadzri | 1723099
5 | Nur Aida Afrina Binti Zulnazri | 1729832

## Introduction
**myBelajar** is an interactive learning application that enables users to learn and gain knowledge with interesting questions and facts. myBelajar uses the concept of an answer card where, when the user presses on the card it will show a fact about that topic. Users can choose categories of knowledge that they want to know such as educational, sports, entertainment and many more. It is specially designed to attract people, especially children to learn more about interesting facts. Due to the pandemic of Covid-19, online learning has been a new norm for students, including teachers where we need to adapt to the online activities and classes. Therefore, myBelajar application can help teachers and students to learn additional knowledge as activities to make online learning more interactive and fun. 

**myBelajar** application is targeted to users with access to smartphone and internet connection. Generally, we are targeted to people aged 12 years and above. myBelajar will be developed using React Native and Firebase as storage. The data of users and facts will be stored in Firestore and Realtime Database.

## Objective
* To assist users in focusing, recognizing gaps in knowledge, building confidence, and assisting them in remembering information.
* To act as an alternative method in learning something that will profit the users of this application.
* To motivate users to develop their memorizing skills, contribute in educational discussions, and do well in building general knowledge skills.

## Features and Functionalities
1. **Signup Page** - Allow users to signup and access the dashboard
2. **Login Page** - Allow users to login and access the dashboard
3. **Home Page** - Categorized various topics in cards
4. **Facts Page** - Display facts card for selected topic
5. **Trending Page** - Display top 4 categories that have the highest tap
6. **Profile Page** - Display user information

## Screen Navigation

![screennavigation](./src/images/screen_navigation.png)

## Sequence Diagram
![](./src/images/ref_1.png)
![](./src/images/ref_2.png)
![](./src/images/ref_3.png)
![](./src/images/ref_4.png)
![](./src/images/ref_5.png)

## User Interface

![](./src/images/ui_1.png)
This is the initial screen for the new user who just starts using this application. A screen with a login and register button will appear. Existing users will just need to click on the login button while the new user will need to register for a new account.

![](./src/images/ui_2.png)![]
Existing users will need to click the login button. After tapping into the login button, they will be redirected to a screen with a login form and they will need to enter their email and password.

![](./src/images/ui_3.png)
Meanwhile for the new user, they will be directed to a register screen and they will                                need to enter their first name, last name, email, password and also confirm their password. After they will just click register for their account to be created. These details will then be displayed later.

![](./src/images/ui_4.png)
This is the home screen for the users of myBelajar. A few categories of topics will be displayed and the users can choose any category they want to learn about.This categories data is fetched from the Firestore.

![](./src/images/ui_5.png)
After the users click into the categories they want, they will discover a few statement cards related to the categories that they have chosen. This screen uses a scroll view so that the users can scroll through various questions provided. The statements are fetched from Firestore.

![](./src/images/ui_6.png)
When the users tap on the cards, the cards tapped will be flipped and the facts of the statements related to the category will then be displayed replacing the statements. Flip card is used to show statements and facts.

![](./src/images/ui_7.png)
When users tapped on the trending tab, top 4 categories that are mostly tapped will be displayed so that the users will know which categories that are currently popular amongst the users.

![](./src/images/ui_8.png)
This is the profile screen. In this screen, the users can see the information and details about themselves. The users also need to go to this screen in order to sign out from myBelajar.

## Challenges and Difficulties

A set of requirements that has been determined in the early phase of project planning are completed. However, alongside the development there are always challenges and difficulties throughout the project. Some of the challenges that are being encountered during this development is connecting to Firestore. The problem is to connect between the data from registration in authentication to the Firestore in order to display a user’s information in the profile page. This is because during the registration process the user information is not saved in the Firestore, so we need to add it into the Firestore to use in other pages. 

Other than that, challenges that are being encountered is to figure out the best ways to display data using a loop based on data from the Firestore. For example creating one component and looping it based on the objects that are in the Firestore. Therefore, we do not code the same component again. This is mainly to avoid any redundancy in the code development. Moreover, in order for the data to be retrieved easily from Firestore, the structure of the data in the Firestore must be created properly. For example, creating collections, documents and proper fields. This will ease us to display the document in a collection based on its unique ID.

Some of the issues that can be addressed as challenges throughout the development process is that we do not have real users requirements. As we know, when developing a good software system, we should focus on the user's needs to satisfy the requirements and develop changes. Therefore, developing an application without the real users requirement is a complex process to determine user's acceptance.

Besides, the process of integrating the codes is also a bit challenging since all the group members are doing all the group work remotely from each other. However, this issue is not a big problem since there are a lot of online platforms where all the group members can do the coding together such as the Snack platform. With the existence of this kind of platform, doing the coding remotely in a group will be such an ease. In addition, the current Movement Control Order (MCO) also affects the development process as it limits the project resources. Virtual meetups restrict group members coordination and collaboration in certain ways.

To conclude, if we look at all of the challenges and difficulties, we realize that most of the challenges are related to the code and resources that can be easily worked out through the available platform or references. However, some parts of the development may not be as good as existing applications and may produce some bugs and errors. Thus, more effort should be put on these aspects and enhanced in the future development.


## References
* Why are Quizzes valuable in education? (n.d.). Retrieved April 24, 2021, from https://www.educationquizzes.com/knowledge-bank/why-are-quizzes-valuable-in-education/
* LMS, K. (n.d.). Advantages/benefits of online quiz: Online quiz creator. Retrieved April 24, 2021, from https://www.onlinequizcreator.com/knowledge-center/lms-knowledge-center/benefits-of-online-quiz/item289
