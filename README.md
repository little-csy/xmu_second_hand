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

## Screenshots

<table>
  <tr>
    <td align="center" width="33%">
      <img width="250" alt="Marketplace Home" src="https://github.com/user-attachments/assets/a2f826d6-120c-42d6-919a-fb85f6e6b6a5" />
      <br />Marketplace Home
    </td>
    <td align="center" width="33%">
      <img width="250" alt="Publish Item" src="https://github.com/user-attachments/assets/3681c888-c10c-4505-a7ba-98af418de6ec" />
      <br />Publish Item
    </td>
    <td align="center" width="33%">
      <img width="250" alt="Publish Success" src="https://github.com/user-attachments/assets/70b34b44-3048-4389-bb5e-262e50af84c0" />
      <br />Publish Success
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img width="250" alt="My Listings" src="https://github.com/user-attachments/assets/bf509cdd-d811-4029-b0de-4a1df536b700" />
      <br />My Listings
    </td>
    <td align="center" width="33%">
      <img width="250" alt="Order Details" src="https://github.com/user-attachments/assets/cd412ee4-c618-4932-a5e0-89c5824a776d" />
      <br />Order Details
    </td>
    <td align="center" width="33%">
      <img width="250" alt="Reservation Notification" src="https://github.com/user-attachments/assets/ad3d3dd0-0033-4002-8e4e-8287659bce31" />
      <br />Reservation Notification
    </td>
  </tr>
</table>








