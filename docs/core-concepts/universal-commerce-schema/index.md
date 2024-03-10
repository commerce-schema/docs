# Universal Commerce Schema

**Work in Progress**

```mermaid
erDiagram
    orders ||--o{ order_line_items : "1..*"
    order_line_items ||--o{ product_listings : "1..*"
    product_listings }o--|| products : "1..*"
    product_stores ||--o{ inventory_history : "1..*"
    product_stores ||--o{ price_history : "1..*"
    stores ||--o{ orders: "1..*"
    stores ||--o{ inventory_history: "1..*"
    stores ||--o{ price_history: "1..*"
    product_stores ||--o{ inventory_cost_history : "1..*"
    product_stores ||--o{ collections : "1..*"
    products ||--o{ product_stores : "1..*"
    stores ||--o{ product_stores : "1..*"
    product_stores ||--o{ product_reviews : "1..*"
    customers ||--o{ orders : "1..*"
    customers ||--o{ product_reviews : "1..*"
    customers ||--o{ customer_addresses : "1..*"
    suppliers }o--o{ product_suppliers : "*..*"
    products }o--o{ product_suppliers : "*..*"
    customers }o--o{ audiences : "*..*"
    ad_campaigns }o--|| audiences : "*..1"
    ad_campaigns ||--o{ ads : "1..*"
    ads ||--o{ ad_impressions : "1..*"
    email_campaigns }o--|| audiences : "*..1"
    email_campaigns ||--o{ emails : "1..*"
    emails ||--o{ emails_sent : "1..*"
    customers ||--o{ customer_email_addresses : "1..*"
    currency ||--o{ order_line_items : "1..*"
    markets }o--o{ store_markets : "*..*"
    stores }o--o{ store_markets : "*..*"
    orders }o--o{ customer_addresses : "*..*"


    orders {
        varchar order_id
        varchar customer_id
        varchar market_id
        varchar store_id
        datetime order_created_datetime
        datetime order_last_modified_datetime
        decimal order_total
        varchar currency_name
        varchar order_status
        decimal order_tax
        decimal order_shipping
        decimal order_discount
        decimal order_subtotal
        varchar order_source
        varchar shipping_address_id
        varchar billing_address_id
    }
    order_line_items {
        varchar order_item_id
        varchar order_id
        varchar currency_name
        varchar product_store_id
        datetime order_item_created_datetime
        datetime order_item_last_modified_datetime
        decimal order_item_price
        decimal order_item_tax
        decimal order_item_shipping
        decimal order_item_discount
        decimal order_item_subtotal
        decimal order_item_quantity
        decimal order_quantity_fulfilled
        decimal product_cost
        varchar order_item_status
    }
    product_listings {
        varchar product_list_id
        varchar product_store_id
        varchar market_id
        varchar store_id
        decimal product_price
        varchar currency_name   
        datetime product_listing_created_datetime
        datetime product_listing_last_modified_datetime
        varchar product_listing_status
        varchar product_listing_description
    }
    products {
        varchar product_id
        varchar supplier_id
        varchar product_name
        varchar product_sku
        datetime product_created_datetime
        datetime product_last_modified_datetime
        varchar product_description
        varchar product_category
        varchar product_subcategory
        varchar product_brand
        varchar product_color
        varchar product_size
        varchar product_weight
        varchar product_weight_unit
        varchar product_department
        varchar product_status
    }
    inventory_history {
        varchar product_store_id
        datetime inventory_datetime
        varchar store_id
        decimal inventory_quantity

    }
    price_history {
        varchar product_store_id
        datetime price_datetime
        decimal price 
        varchar currency
        varchar store_id
        varchar market_id
        datetime price_start_datetime
        datetime price_end_datetime

    }
    stores {
        varchar store_id
        varchar market_id
        date store_open_date
        date store_close_date
    }
    inventory_cost_history {
        varchar product_store_id
        datetime cost_datetime
        varchar store_id
        decimal cost
        varchar currency
        datetime product_received_datetime
        decimal quantity_received
        varchar supplier_id
    }
    collections {
        varchar collection_id
        varchar product_store_id
        varchar store_id
        datetime collection_created_datetime
        datetime collection_last_modified_datetime
    }
    product_stores {
        varchar product_store_id
        varchar product_id
        varchar store_id
        datetime product_store_created_datetime
        datetime product_store_last_modified_datetime
    }
    product_reviews {
        varchar review_id
        varchar product_store_id
        varchar customer_id
        varchar review
        decimal rating
        datetime product_review_created_datetime
        datetime product_review_last_modified_datetime
        varchar review_status
        varchar review_language
        varchar review_market
    }
    customers {
        varchar customer_id
        varchar first_name
        varchar last_name
        varchar email_id
        varchar address_id
        varchar customer_status
        datetime customer_created_datetime
        datetime customer_last_modified_datetime
    }
    customer_addresses {
        varchar customer_address_id
        varchar customer_id
        varchar address
        varchar city
        varchar state
        varchar zip
        varchar country
        varchar address_type
        datetime address_created_datetime
        datetime address_last_modified_datetime
    }
    suppliers {
        varchar supplier_id
        varchar supplier_name
        varchar supplier_address
        varchar supplier_city
        varchar supplier_state
        varchar supplier_zip
        varchar supplier_country
        varchar supplier_phone
        varchar supplier_email
        varchar supplier_status
        datetime supplier_created_datetime
        datetime supplier_last_modified_datetime
    }
    audiences {
        varchar audience_id
        varchar customer_id
        datetime audience_created_datetime
        datetime audience_last_modified_datetime
    }
    ad_campaigns {
        varchar ad_campaign_id
        varchar audience_id
        varchar ad_platform_id
        datetime ad_campaign_created_datetime
        datetime ad_campaign_last_modified_datetime
    }
    ads {
        varchar ad_id
        varchar ad_campaign_id
        datetime ad_created_datetime
        datetime ad_last_modified_datetime
    }
    ad_impressions {
        varchar ad_impression_id
        varchar ad_id
        datetime ad_impression_datetime
    }
    email_campaigns {
        varchar email_campaign_id
        varchar audience_id
        datetime email_campaign_created_datetime
    }
    emails {
        varchar email_id
        varchar email_campaign_id
        datetime email_created_datetime
    }
    emails_sent {
        varchar email_sent_id
        varchar email_id
        datetime email_sent_datetime
    }
    customer_email_addresses {
        varchar customer_email_address_id
        varchar customer_id
        varchar email_address
        datetime email_address_created_datetime
        datetime email_address_last_modified_datetime
    }
    calendar{
        date date
        varchar day_of_week
        varchar month
        varchar year
        varchar fiscal_week
        varchar fiscal_month
        varchar fiscal_quarter
        varchar fiscal_year
    }
    currency{
        varchar currency_name
        date currency_date
        decimal currency_exchange_rate
    }
    markets {
        varchar market_id
        varchar market_name
    }
    store_markets {
        varchar store_market_id
        varchar store_id
        varchar market_id
    }
    product_suppliers { 
        varchar product_supplier_id
        varchar product_id
        varchar supplier_id
        datetime product_supplier_created_datetime
        datetime product_supplier_last_modified_datetime
    }
```
