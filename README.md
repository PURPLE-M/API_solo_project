# API-SOLO-PROJECT

家族の家計簿を構築するための API です

# REST API

## 家族の一覧取得

### Request

`GET /api/family`

### Response

    [
    {
        "id": 2,
        "name": "Tomohiro",
        "sex": 1,
        "age": 34
    },
    ]

## 家族の追加

### Request

`POST /api/family`

    {
      "id": 7,
      "name": "Haruki",
      "sex": 1,
      "age": 22
    }

### Response

    {
    "id": 7
    }

## 家族情報の変更

### Request

`PATCH /api/family/:id`

    {
      "sex": 1
    }

### Response

    [
        {
            "id": 4,
            "name": "Rie",
            "sex": 1,
            "age": 60
        }
    ]

## 家族情報の削除

### Request

`DELETE /api/family/:id`

### Response

    {
    "id": 7
    }
