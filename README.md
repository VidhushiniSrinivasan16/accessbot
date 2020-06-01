
#Access bot

## Inspiration
No one can deny that there is plenty of information for general public to plan their day and visit restaurants, museums and go to work , however accessibility information for people living with disabilities is still extremely limited.  Websites like Yelp and similar reduce the concept of "accessibility" to a binary selection (Wheelchair accessible or not).  Unfortunately this doesn't help the majority of people stranded at home with different disabilities. For example, visually or hearing impaired does not get any help from the current categories.  Many people are left having to call or email and that can be discouraging and a way to block them from integrating into society. We believe that technology, in this case AI applied to an assistant,  have the potential to make life better for a lot of people.

## What it does
Accessibility-Check bot have 2 main functions, the first one is to organize a coordinated crowdsourcing effort to map restaurant, store , offices, etc.  It basically shoot  a quick set of questions like "Do you see a ramp?", "Can you ask for a Braile menu?" , "Is the bathroom in the first floor?", etc.  All these questions are based on American’s with Disability Act (ADA) and Open travel alliance (OTA).  

The second functionality of this bot is to inform the general public about the accessibility based on their location. A mechanism will be included to catch unanswered queries, save them in a database and add them to the crowdsource queue.



![Add Info](https://user-images.githubusercontent.com/6516814/83339081-fea49780-a27e-11ea-8b7e-cd6917bf35ce.jpg)

![Get Info](https://user-images.githubusercontent.com/6516814/83339102-33185380-a27f-11ea-8403-c7600cf544b7.jpg)

# Installation

Confirm you have NodeJs 10.x or higher

```bash
Node-v
```

Install the code dependencies

```
yarn install
```

Enable .env file

```bash
mv .sample.env .env
```

Add App IDs and Secrets to `.env` configuration

_more info at: https://developers.facebook.com/docs/messenger-platform/introduction_

```bash
vim .env
```

Things to update:

```
PAGE_ID=
APP_ID=
PAGE_ACCESS_TOKEN=
APP_SECRET=
VERIFY_TOKEN=<ANY STRING YOU'LL REMEMBER>
```


# Usage

In order to receive messages, we need to be able to get incoming webhooks from Facebook Servers. So we need an external address, a quick way to do this is to use NGROK since it will provide an external https address that will tunnel into your NodeJS running app.

1- Install NGROK in your computer, go to the link and follow the instructions:

https://dashboard.ngrok.com/get-started/setup

2- run in port 80

```bash
./ngrok http 80
```


#### 3. ADD TUNNEL URL:

Inside the `.env` config, add the URL provided by NGROK:

```bash
APP_URL=https://<AUTOGENERATED>.ngrok.io
```

⚠️ You need to update `APP_URL`  everytime you close the terminal running NGROK.


#### 4. In the root of the project run app locally:

```bash
node app.js
```
 
 #### 5. Confirm is running by visiting this URL in your browser

`http://localhost:80/`

_You should be able to see a welcome Message._


#### 6. Confirm Token
Pay attention to the Command Line, it will provide you with an URL that you need to visit in order to validate the token.  _it looks similar to this:_

`https://xxxxxxxx.ngrok.io/profile?mode=all&verify_token=xxxxxxx`


#### 7. Test your app 
Go to the link provided by the Terminal, _it looks similar to this:_

`https://m.me/xxxxxx`

#### 8. Test that your app setup is successful

  Send a message to your Page from Facebook or in Messenger, if your webhook receives an event, you have fully set up your app! Voilà!

⚠️ If you see the Bot, but you cannot communicate with it, most probably you haven't been added as contributor (this bot is not public yet),
Please send a mail via Slack or mail: gcid12@gmail.com








