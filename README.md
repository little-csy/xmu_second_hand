# Campus Secondhand Marketplace

A WeChat Mini Program designed for students at **Xiamen University** to buy and sell secondhand items. It brings product listings, campus-based browsing, and order management into WeChat without requiring a separate app.

## Features

- **User accounts:** register, log in, and manage campus and contact information.
- **Sell items:** publish listings with descriptions, prices, categories, pickup options, and up to five images; edit, remove, or relist items.
- **Browse and search:** explore listings by category or product name and view item and seller details.
- **Manage transactions:** reserve items, review orders, cancel transactions, and confirm receipt and completion.
- **Validation and notifications:** validate contact details, prevent users from buying their own listings, and request permission for transaction notifications.

## Technology

| Layer | Technology |
| --- | --- |
| Client | WeChat Mini Program |
| UI components | Vant |
| Backend | WeChat Cloud Development and cloud functions |
| Data storage | Cloud database |

The client handles browsing, publishing, profiles, and orders. Cloud functions handle user identification, data updates, transaction status, cancellations, and notifications.

## Database

- `user`: user profiles and contact information, associated with WeChat OpenID.
- `publish`: product listings, seller details, and availability status.
- `order`: buyer and seller references, transaction details, and order status.

## Transaction Flow

```text
Publish item → Buyer reserves → Arrange exchange → Confirm receipt → Seller confirms → Complete
```

The original demo used a temporary cloud environment scheduled to expire on **March 7, 2023**. Running the project requires a configured WeChat Mini Program and cloud environment.


### (March 9) Notice Due to the cancellation of WeChat Cloud Service free quotas, the server resources for this project may be released.
### Screenshots
![image](https://user-images.githubusercontent.com/73229305/220561260-2a24b5d7-56a0-4226-b919-b4b9843e8647.png)

![image](https://user-images.githubusercontent.com/73229305/220561303-ac292276-6652-457c-813e-e2a870d506a7.png)

![image](https://user-images.githubusercontent.com/73229305/220561344-bd24c170-0c18-4349-91e1-316fd291de72.png)

![image](https://user-images.githubusercontent.com/73229305/220561361-07ceafcd-e5d0-43ee-8c7a-339d04adcb8d.png)

![image](https://user-images.githubusercontent.com/73229305/220561383-9eea2f05-9b72-4563-a264-cae4f310f54a.png)

![image](https://user-images.githubusercontent.com/73229305/220561433-abfe11e6-6af3-4730-bb8d-7fb537b8395e.png)

![image](https://user-images.githubusercontent.com/73229305/220561511-378cfe92-210f-4776-a5df-67a53b55da58.png)








