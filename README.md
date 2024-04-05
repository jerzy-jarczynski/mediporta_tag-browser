# Tags Browser

  
The Tags Browser is an application that connects to the Stack Overflow API to retrieve tags. The fetched tags are listed in a table with pagination and sorting capabilities. Users have the option to determine how many tags are displayed per page. Tag information is stored in the Redux store. Connection to the API is facilitated using Axios. The graphical user interface is built using the MUI library. Stories have been developed for key components within the project. The application appropriately responds to download errors and data loading times.

## Demo

For this project, I haven't set up deployment. To view the project, you need to clone the repository and install it locally on your machine.

##  Technological Stack

1.  **Axios**: A promise-based HTTP client for making requests to the Stack Overflow API.
2.  **Redux**: A predictable state container for JavaScript apps, used here to manage tag information.
3.  **MUI (Material-UI)**: A popular React UI framework that provides pre-designed React components following Google's Material Design principles, utilized to build the graphical user interface.
4.  **React**: A JavaScript library for building user interfaces.
5.  **Storybook**: A development environment for UI components, enabling the development and testing of components in isolation.
6.  **JavaScript/ES6+**: The primary programming language for the application, utilizing modern JavaScript features.
7.  **HTML/CSS**: For structuring and styling the user interface elements.

## Instalation

To download the repository, execute the following command:

```
git clone https://github.com/jerzy-jarczynski/mediporta_tag-browser.git
```

Next, navigate into the downloaded project directory and install dependencies by running:

```
npm install
```

Please ensure that Node.js and npm (or yarn) are installed on your system before proceeding. To run the project on `localhost:3000`, execute the start script with the following command:

```
npm start
```


This will start the development server, and you can view the project in your web browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[](https://github.com/jerzy-jarczynski/final_jewelry_shop#license)

[MIT](https://choosealicense.com/licenses/mit/)

## Issues


Working on this project, I had to start by figuring out what MUI and Storybook were. Luckily, educating myself didn't take much time. It took me just as long to recall the Redux rules and solve problems related to correctly placing the tags fetched from the API in the store.

I didn't think it could happen, but continuous refreshing and sending new requests while working on the project caused Stack Overflow to block my IP, and for a while, I developed the project based on data firmly placed in the InitialState. However, I tested the whole thing on a different network and found that the tags were being fetched correctly.

This project involved 2 sleepless nights and 2 restarts from scratch. It didn't happen without the help of Chat GPT, with whom I'm increasingly collaborating more effectively (3.5). I hope that despite the delay, recruiters will look at my task implementation with a kind eye.

# VERY IMPORTANT

DO NOT REQUEST FOR MORE THAT 100 TAGS!!!