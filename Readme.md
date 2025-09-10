# Places Project with Open Web UI

This project is a full-stack application integrating Node JS backend, React JS frontend, Open Web UI, and Google Maps API. Users can search for places and view results on embedded Google Maps.

## Project Structure

```
llm-maps-search/
├─ backend/               # Node JS + Express backend
├─ places-frontend/       # React JS frontend
├─ docker-compose.yaml    # Docker Compose configuration
├─ Makefile               # Shortcut for building and running containers
└─ README.md
```

## Technologies Used

- Backend: Node JS + Express
- Frontend: React JS
- Open Web UI: [https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)
- Google Maps API
- Docker containerization

## Prerequisites

1. Install Docker and Docker Compose.
2. Copy `.env.example` to `.env` in both `backend/` and `places-frontend/`.
3. Fill in Google Maps API keys in `.env`.
4. Setup Open Web UI: choose a model and provide API key (to be configured manually before using the frontend).

## Running the Project

1. Go to the root folder of the project.
2. Run all containers:

```bash
make up
```

3. Once all containers are up, access the application at:

- Open Web UI: [http://localhost:3000/](http://localhost:3000/)
- Backend API: [http://localhost:3003/](http://localhost:3003/)
- Frontend: [http://localhost:5173/](http://localhost:5173/)

## Notes

- Before making any prompts in the frontend, ensure Open Web UI is properly configured with a model and API key.
  - Quick Setup: https://docs.openwebui.com/getting-started/quick-start/
  - Generate API Key: https://docs.openwebui.com/getting-started/api-endpoints
  - After generate API KEY, put the value inside `.env` file from `/backend/.env` in `OPENWEBUI_API_KEY`
- Frontend communicates with backend via `/api/search`.
- Docker Compose sets up three main services: Open Web UI, backend, and frontend.

## API Search Example
- CURL:
```
  curl --location 'http://localhost:3003/api/search' \ --header 'Content-Type: application/json' \ --data '{
    "prompt": "hotel near jakarta",
    "model": "llama2:7b"}'
```
- Example Response:
```json
{
    "query": "hotel near jakarta",
    "places": [
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Kramat Raya No.41, RT.9/RW.4, Kramat, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10450, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1839426,
                    "lng": 106.8442871
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.182674070107279,
                        "lng": 106.8455331798927
                    },
                    "southwest": {
                        "lat": -6.185373729892722,
                        "lng": 106.8428335201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Hotel Rivoli Jakarta",
            "photos": [
                {
                    "height": 960,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101782472687552662946\">Hotel Rivoli Jakarta</a>"
                    ],
                    "photo_reference": "AciIO2cPFwYdVGmOlQHfifO7KZ8apHBYPOLIPnm_Zv4gkQlfZThY40-vN6Na9AIne94TyvLfvICp9tQisMB70xQKRrpa0vDaAlo__-ZdolAbRx2DqjBTjBUYlHdpSHyGA5GTpSLOOBrAGDmPHrzld18UZTZt4zGzPLrxnYgcADhN3wwOyB_U7Sx-l9bJG9fzbmx-MYOZv8THm-HlP7EYyrpWLiAaPF1eS7ceCRn117gI6f-GVdXblybqMBJedx3cm1UEcMI_hiw1lRro-Vu2MXWpp4DnBFBJFcBvRj_866VwT75YNhuwk7Q",
                    "width": 1280
                }
            ],
            "place_id": "ChIJSyoA-Ej0aS4RgEHn5VIq4rU",
            "plus_code": {
                "compound_code": "RR8V+CP Kramat, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR8V+CP"
            },
            "rating": 4.2,
            "reference": "ChIJSyoA-Ej0aS4RgEHn5VIq4rU",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 3011
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Matraman Raya No.173 7, RT.2/RW.6, Bali Mester, Kecamatan Jatinegara, Jakarta, Daerah Khusus Ibukota Jakarta 13310, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.214031299999999,
                    "lng": 106.8641449
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.212748170107278,
                        "lng": 106.8654616298927
                    },
                    "southwest": {
                        "lat": -6.215447829892722,
                        "lng": 106.8627619701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Juno Jatinegara Jakarta",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3631,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114863604457722871476\">Juno Jatinegara Jakarta</a>"
                    ],
                    "photo_reference": "AciIO2cQ9EOTnZurFjsIeLG3M_Et9zoPgBzFE5WdWNZf3wH6UVQYbwP1-cs4oEsMg5Y2pTLP8lLYALexxIh7DtV7Om2ikdv-rFVuWekDanvYewwqGiPYws3eG8BKOFnneO9JfbawvYPe-PkBLKfOnkmIIC3gE9yXlqZBawWtuOwrcfTR-oZ0-CnGizXwwrsTFTSwEnKNzk5wfau9N4Ypq_NwTmG8L_2prqOPHVA3PEkIv07x4kL30unJVsIoE3IWjTx6p9F7_tM2rTRiL894OaRiYiyooRTMXMaU9iKB996O7yAG-Kk-RIU",
                    "width": 5289
                }
            ],
            "place_id": "ChIJXzkOZuj1aS4RbFuKjDkfDvI",
            "plus_code": {
                "compound_code": "QVP7+9M Bali Mester, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58QVP7+9M"
            },
            "rating": 4.8,
            "reference": "ChIJXzkOZuj1aS4RbFuKjDkfDvI",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 2496
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Mangga Besar VIII No.9B-9C 13, RT.13/RW.1, Taman Sari, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11150, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.149951799999999,
                    "lng": 106.8257664
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.148604820107278,
                        "lng": 106.8270759298927
                    },
                    "southwest": {
                        "lat": -6.151304479892722,
                        "lng": 106.8243762701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Bold Hotel",
            "photos": [
                {
                    "height": 4096,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108249763474003554133\">海撩料</a>"
                    ],
                    "photo_reference": "AciIO2dHkLIibbwO_HHRPNmfnKO-UfvuB3hqV07obKI_h8vYe19mjUqoSALIOJxSrHUtK7VkUKv3PVwskn1cPvoY0ykj4XLgH4RIDzdUukPy3OahcMpBzdZwaR4v4TE6FFT12BSszLItZfrylctZTRQlojOOmH0Hafw_jhejSHHYx964QlptnaewanZ7_evzA3_-I8gkTjYauDMjgY1bpOCi_6e_S7gNEli4bqLgkzXAUbZQnCXTYFdJZyh8GDH_cTxsJLbUroSr6EhsvXGV2BKk7Mo8_xeKwKhXxwjEgt-O-VjlGkCJdERKzcTfSHFfkmCeKWlUYSLjZNyujPJrMSnhVB2033ru_upGfhSO-i1PBOisrzOoJUYzVuY0mf-JeJJEk4JHRJSvh9f9ixRv48O9N0vCoBnF3zhsbls8omasmru0s-lGMlb4MX0lCo3NnZT8L8vwWYp0Mlm_1m4YNKQ2RzsRzcbkI3svJk-FpCuXiQ_0Q48jx8xiGbV_7Tsgq2XLmNNpZpAiNInsAziygKA8vaIqf4gYIVoVZCZWvvTppKOAUdLSwTbIraeLZBXM1eGiiRC_SdOYRg3x4A",
                    "width": 3072
                }
            ],
            "place_id": "ChIJLyCLOeT1aS4RlrdC5S2TJD0",
            "plus_code": {
                "compound_code": "VR2G+28 Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58VR2G+28"
            },
            "rating": 4.4,
            "reference": "ChIJLyCLOeT1aS4RlrdC5S2TJD0",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 960
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Kebon Sirih No.17-19, Kb. Sirih, Kec. Menteng, Jakarta, Daerah Khusus Ibukota Jakarta 10340, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1848098,
                    "lng": 106.8310014
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.183488870107277,
                        "lng": 106.8320538298927
                    },
                    "southwest": {
                        "lat": -6.186188529892721,
                        "lng": 106.8293541701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Park Hyatt Jakarta",
            "photos": [
                {
                    "height": 2838,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104452385443555609403\">Park Hyatt Jakarta</a>"
                    ],
                    "photo_reference": "AciIO2feo87jFj4bEmzscz5x26c1nMJ9dvjSbgQ6l1GqimrBgi3Ki51_dmYFYOZe3feGRXDTsTpIac2okaK1HfMkdiFfm5G1ce1lczQkKAOYDTX4qf3BE_DhrGSC9llNXSmjCKSR975bCNLnraRdpfExXjoKSK1kgCX6dadFp0nUTS4HWcbN3AVb6aLtGHkTJcqT092VM_P-IjwAkrbbdZ6M3ItKDKq8Bsm4WttH1Aofr240j5YC0fdd1x_HCYYHSrkjdOruqNr7dybGRM6vjPdijGDMvru08gOs5ApegJbpWr5cPospZ7g",
                    "width": 5078
                }
            ],
            "place_id": "ChIJXS2uQDD0aS4ROFlsU3psnIY",
            "plus_code": {
                "compound_code": "RR8J+3C Kb. Sirih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR8J+3C"
            },
            "rating": 4.7,
            "reference": "ChIJXS2uQDD0aS4ROFlsU3psnIY",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 2286
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "No.7AA, Jl. RP. Soeroso, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1895092,
                    "lng": 106.836265
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.188113170107278,
                        "lng": 106.8375587298927
                    },
                    "southwest": {
                        "lat": -6.190812829892722,
                        "lng": 106.8348590701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "RedDoorz Plus near Taman Ismail Marzuki",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111217010762296005051\">RedDoorz Plus near Taman Ismail Marzuki</a>"
                    ],
                    "photo_reference": "AciIO2dpg1-bezURATkJIN4O0BfHv3LOcIbzJfaFE5bUchSRMD5N8xx-HtyvgF1u0fXLz8nPeMge81rHuFDRvpOeUMM4VZlDkdzeh7W_kA3RRhUXyu3ahNt15KuJNXXGAzGnP0SfTKl-dGlo0fUb_8f0Gv-cnY-lYHyTtuDw_JWdzE9TeOJK8GiE5qAp41YScr7IEGpCdLtVHagiYw9L-DgADXYVzRcz3egzjKO07IqGATQz-YHE7ZRwdo0Hk2e7qHrugx0OKF9i0sIdEX0XvymMfSjfxwhtatfZNSTDsrCYF1c5kYl3cB8",
                    "width": 900
                }
            ],
            "place_id": "ChIJ_b_JbwX1aS4R6V2LZRL6LII",
            "plus_code": {
                "compound_code": "RR6P+5G Cikini, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR6P+5G"
            },
            "rating": 4.4,
            "reference": "ChIJ_b_JbwX1aS4R6V2LZRL6LII",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 144
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Antara No.39, RT.2/RW.1, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10740, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1662317,
                    "lng": 106.8332139
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.164881420107278,
                        "lng": 106.8345755298927
                    },
                    "southwest": {
                        "lat": -6.167581079892722,
                        "lng": 106.8318758701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Hotel Antara",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 683,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105384568933388377036\">Hotel Antara</a>"
                    ],
                    "photo_reference": "AciIO2cBy24zKSblR4mQ2JltlJcC7AGBtq9_s-gDWV2ZTVnfMuVU-yqMYWztOzE2CwlpahMa8YLP2YNO_F09Aqt9Sj3UTR_EOw924lujcHm7GS_quqkIsImEzUJP8SNCeZL39imuL0_sXUym1DMQHRC09xxMd9kgc4-5ypJQrX6uQQuCp6t-b7GizLMXx-0if91Mmgzk3-9GEdI414QnKcgxKAhbPX-Et3yVjEpDSdIlJiU7RPFnOpEw6yXtA_W-zQt72clUhBHZoUWemjxlSGoZEROxAZRKOOIWr2pK_o31N7GPfpGPodw",
                    "width": 1024
                }
            ],
            "place_id": "ChIJ0W1Ce8_1aS4R_6NW9DWOt5E",
            "plus_code": {
                "compound_code": "RRMM+G7 Ps. Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRMM+G7"
            },
            "rating": 4,
            "reference": "ChIJ0W1Ce8_1aS4R_6NW9DWOt5E",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 495
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jalan 5 Dermawan No.1, RW.4, Karang Anyar, Kecamatan Sawah Besar, Jakarta, Daerah Khusus Ibukota Jakarta 10740, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1564272,
                    "lng": 106.8306957
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.155114320107278,
                        "lng": 106.8320420298927
                    },
                    "southwest": {
                        "lat": -6.157813979892722,
                        "lng": 106.8293423701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "OYO 90115 Near Pasar Baru",
            "photos": [
                {
                    "height": 427,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115110388176284604991\">Super OYO 90115 Near Pasar Baru</a>"
                    ],
                    "photo_reference": "AciIO2fScd9VY8OdrsEj5eb1Uvls0-CJPq_SkNVP-MMEhY1MtfuImc4TOmoMgbfXjY5tdZ-JZ5BuV6xl6Y15cukrv_XoFeCrw8aFZIZd8jF7sbSArZSVAnmPL-t0XVJhr75HVB4YvDCydJcPDVUceMn0NhWXZ6Lbf76t_xlqZjBGZNTmUf2FvQG2u_z9aum0DGqqEoxk-7saRPDl_TScna2fyrNT18oT3-mtKyKmvO2N6pXXHkaS2zGtRJ92c7b3yWNNTXFmVIFfHlZ0JfeJ-X5gd9zdC66NAU7DwggDrbHN7YxvX8pT",
                    "width": 640
                }
            ],
            "place_id": "ChIJ89SypML1aS4RfE3QmIeZmZc",
            "plus_code": {
                "compound_code": "RRVJ+C7 Karang Anyar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRVJ+C7"
            },
            "rating": 3.8,
            "reference": "ChIJ89SypML1aS4RfE3QmIeZmZc",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 280
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Kebon Kacang Raya No.27, Kb. Kacang, Kecamatan Tanah Abang, Jakarta, Daerah Khusus Ibukota Jakarta 10240, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1937703,
                    "lng": 106.817199
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.192452870107278,
                        "lng": 106.8185432298927
                    },
                    "southwest": {
                        "lat": -6.195152529892722,
                        "lng": 106.8158435701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Maia Hotel Jakarta",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106032076243659799934\">Maia Hotel Jakarta</a>"
                    ],
                    "photo_reference": "AciIO2f1-mvpL5Rq7KxjdFLI6-wDOr4caemCWbjXDAhYltSP73nfbaCVQBWD6TugVduXasDhE4K4k3RUl1jW1NqaHEZSNy3mLkOiY0Wy-CiRzdjIfeQym7W97ljf3lmdS6xYYnW2VNi1J409aNEXCdvgm_YYYG13Hn3sCNpEYkxL36TRWSmKaFp0AGSQZ-8DeLcS8IuejhqjI-rEgx6j32xyjhsfe3Os1VCnoNIkW9IspZzbJqGPGbz3jyxsPOWeTjiYGoljPWhjaW-CBT2Z57U_3F9g0_WRWdZwuk8lpmy36b7NihrB3LA",
                    "width": 4032
                }
            ],
            "place_id": "ChIJe9yt5ET3aS4RPTXLlA4RSIc",
            "plus_code": {
                "compound_code": "RR48+FV Kb. Kacang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR48+FV"
            },
            "rating": 4.5,
            "reference": "ChIJe9yt5ET3aS4RPTXLlA4RSIc",
            "types": [
                "lodging",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 591
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "001, Jl. Antara No.39, RT.2/RW.1, Pasar Baru, Sawah Besar, Jakarta, 10710, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.166329999999999,
                    "lng": 106.83313
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.165001220107277,
                        "lng": 106.8344917798927
                    },
                    "southwest": {
                        "lat": -6.167700879892721,
                        "lng": 106.8317921201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Collection O Hotel Antara",
            "photos": [
                {
                    "height": 2667,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101428945465208263155\">Collection O Hotel Antara</a>"
                    ],
                    "photo_reference": "AciIO2fHPn5IB8v23fMrVMV0FjvmgLigcEcY6qdkaX3r4DnHswvPG4OJwsL1VKcurGMtL-OlGmSkRWSJ6BgFOGjidU0mhzp9GVBZwlraDOVq5GvIUW4RbLhs60I10m5QGnEmLfXKc4DYq0RxhfJ0rA40u9l_IY5gcuwkfijP7x8fK1LC5iN2NuxPm4SoB1KvVW9eDSTAqvTjCMqKrXcDt2aQTtBPNYflHrHmL5JGH0vXBvav5zhw8OiNgJx4u8L6Q3TAlKl96myaasfvv1pJJpz4NFhSoL25vuTCcyJ8Cv60qk-WBvTodX4",
                    "width": 4000
                }
            ],
            "place_id": "ChIJ28AA3HX1aS4RNEWkyvvC3v8",
            "plus_code": {
                "compound_code": "RRMM+F7 Ps. Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRMM+F7"
            },
            "rating": 3.5,
            "reference": "ChIJ28AA3HX1aS4RNEWkyvvC3v8",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 14
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Mangga Besar IV H No.29, RT.15/RW.2, Taman Sari, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11150, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.152435199999999,
                    "lng": 106.822747
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.144939799999998,
                        "lng": 106.8524385
                    },
                    "southwest": {
                        "lat": -6.174921400000001,
                        "lng": 106.7341237
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Ghurfati Hotel",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103063626344140574398\">长脸张少侠</a>"
                    ],
                    "photo_reference": "AciIO2detGa5mkFBE5jIQBCt_wmbhC3GLsf-BHE5vDwgrlXx36WxXG0LBGIgS3OGpzDKcTJjNLfWOsmpDI0D8EXBZjri9rFlq1-MMsU4k6M6Dp7ksfh_kvh4zvktCDjclH51MyOeCbbegJxNpuyMbbsTDpdiuT2Hqcwvn6f31XU3ziL1oDPgsd_gwhP2P9LKn4jge_nnjXs0ZrEBfuBc0B3uHzsx9dkDlPVD8pBE_ZsBAXptfOfdfGHYhtYc6Q0e24g-jgZAz1Qo9HnMNRlhhV2uAJuNXhvvCfY5x-OTjgYnigJqg61UVbys1dnBRDGmS5kANVfTpKn9PoE3F2Peni-olBMrchWPLLnzeXeB2Ixje45Q3WJH0UVTkYOqjtAYTCvydDgk4OTa8VC80qvUIZdfYxVPqm68GdvgzD3HD6kR83OliTCnpzH2OquaVicI8rgj7y5mtZKYfqO4QHAuiP4YvfUwD7_TxtLX-x5-KZebL3XaSRe36sGmS_0pX1cqHOprrI-gqf2bx4W9WFYJWx4Oj1MJ2QH4ZqIX-NYd6TBbtR57oJTOBPQhoX28bF7nETezfsCg_CX3",
                    "width": 4032
                }
            ],
            "place_id": "ChIJ7R8lZ3D1aS4RkObqZczHy28",
            "plus_code": {
                "compound_code": "RRXF+23 Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRXF+23"
            },
            "rating": 4.2,
            "reference": "ChIJ7R8lZ3D1aS4RkObqZczHy28",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 935
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Asem Baris Raya No.1a, Kb. Baru, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.225522199999999,
                    "lng": 106.8559638
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.224071070107279,
                        "lng": 106.8573365798927
                    },
                    "southwest": {
                        "lat": -6.226770729892722,
                        "lng": 106.8546369201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Urbanview Roemah Tebet",
            "photos": [
                {
                    "height": 600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106767125009897248191\">Urbanview Roemah Tebet</a>"
                    ],
                    "photo_reference": "AciIO2dSyOi-sTLSTzXbOUUoCjZ99shSl0cZ44vDeNOl_xX-KUlf7MGOchqtqL0_OE0fntsiF8zayq_sAG8eJYJmHfTNAISxsqqp-ekIIxHfkv13gZp_TsHhGrIKtICsrvXdLj22f4pz8fZtzf0qK1qZagtAw5-oKThumYLPUGgWrJXXvN36h6CUlb4u7x0CNjwAiJGXcw4w7TLWZsZAbnLlcq3Sx5vhNKxnDMDFWo_OcsdTZmCzWSugMqMOYfBYTcKR3xvfixGWfnB--3F2Eu2r6XViIs2z7XKcFsIy569eTvekWIKOfQk",
                    "width": 900
                }
            ],
            "place_id": "ChIJSyrqPvzzaS4RF5PYKuXQpXU",
            "plus_code": {
                "compound_code": "QVF4+Q9 Kb. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58QVF4+Q9"
            },
            "rating": 2.9,
            "reference": "ChIJSyrqPvzzaS4RF5PYKuXQpXU",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 43
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Cikini Raya No.81, RT.1/RW.2, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1923689,
                    "lng": 106.8390058
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.191070470107278,
                        "lng": 106.8402327298927
                    },
                    "southwest": {
                        "lat": -6.193770129892722,
                        "lng": 106.8375330701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Hotel Cikini",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2303,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114196977609833727232\">Hotel Cikini</a>"
                    ],
                    "photo_reference": "AciIO2euDh0YaYvWE4LRmVTYipMpVaKhin7oAn1q4VPY-BR33hH5CXlsfntaoqEYMIwdWggxmi_kl-TStdlMA_TZ4z1YodHYfvng-BzLM-QZnQjVGaV2bz26hWQWS4TE8htGQ-EyJfcYrMmkOz47LQyNwFTRFS-6YQdRZcCZMY0Jip1YfxMfB1taetbV9sxd_mNVl2-6xwwt-fTYXBfIKNJvtBv7jeNgGIBntHDW7_sbgRIoZL4TtOGjSrLkGx9QmXk0R58K2VhwH0ypJGA47BN9Yw9JcXO-zoE68AeAr4Ti743DMhpFBt4",
                    "width": 4096
                }
            ],
            "place_id": "ChIJozbHJj_0aS4Rh_9qRENERjk",
            "plus_code": {
                "compound_code": "RR5Q+3J Cikini, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR5Q+3J"
            },
            "rating": 4.3,
            "reference": "ChIJozbHJj_0aS4Rh_9qRENERjk",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 1455
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Tebet Utara IV D No.8, RT.4/RW.2, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.227839299999999,
                    "lng": 106.853607
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.226480070107278,
                        "lng": 106.8549566298927
                    },
                    "southwest": {
                        "lat": -6.229179729892722,
                        "lng": 106.8522569701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Tebet Utara Suites",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102038466292609745499\">Andrea Vacation Gallery</a>"
                    ],
                    "photo_reference": "AciIO2faQj8fy6uMUlvtObSHH79T2rWCqnq97oxdzDaE47LpRTx7Fw-xiidX0jz9QW8Ss0GQ_h2i95G5cVvP6dZ_Ys5UBj21F4DNDx98bJOdBEgapxfEkhI4LJNHI-5orzNhtluJ1aS8ZagIBXpuRDBR_IarKH5MbW5Bn7wE_aqT4y5lx2bOISW6aGH9G5oNqVIVPB95bKUcMJbEWelwP61p8WhefVAirg7b273yRKP-bn0ryAslyQbKmSmWURS40oGro2nv22ZDHZU4FxtjtrBDHRvZ8BrMqNNXCDtYGLOPODDdMsTG1kOECg7U1TYhPKQmQHLUcuI2icD2orrL2WuC6AQi9_PlE-aKl2qgR7TK4RhSI1YYcb0Rzej2_BoJ1UZdJyOoDGeCkVEbHkTftt8IGks-NTOqVaCxBk6j9DGo5a8WCoGexFE7ATxvU9osy4pSWQmgcvoiU2-G9s5VA7JZ89v0MO9qRWP5bQPvmW1aTsKdNJgH4G-iqNaE8-WWkzbS-e1GIdeimbHqqxUpCckATDRcyKU9FjI0xSazx5YFVof1drh1uZPHmVIqo4L32N-ocDTVdwbc",
                    "width": 4032
                }
            ],
            "place_id": "ChIJ2_RzoZrzaS4RNuhlRYaBjtE",
            "plus_code": {
                "compound_code": "QVC3+VC Tebet Tim., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58QVC3+VC"
            },
            "rating": 3.9,
            "reference": "ChIJ2_RzoZrzaS4RNuhlRYaBjtE",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 329
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Tomang Raya No.88, RT.2/RW.6, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.171958,
                    "lng": 106.8081924
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.170530070107278,
                        "lng": 106.8095293798927
                    },
                    "southwest": {
                        "lat": -6.173229729892721,
                        "lng": 106.8068297201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Royal City Tomang Hotel",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105594477877348791238\">Royal City Tomang Hotel</a>"
                    ],
                    "photo_reference": "AciIO2eqRWRT_t_is8OE9K5IAKPjAv9PTKMGg0JmSv4ZCZVcxc8NTUKehAYkS7Ugq-nNaNx8VuCXkmlIwfFcT66GBJd6otNep3IBq5dpEy7qSr743GYxJf4C7l24UweiT1UCHFr38bwUxn_MKh1S675BXtrhySepC3im7aHk3qGRECcLR6dhjlsN0mEoubg_n0407Zi8FEAgvBLiy4metKV27lMNtpoahkcABRj67X5zOwjyHpL1-frTBq0qn07gzPKIE_mKtB4TxpO9eagAv2Fo1ab6hEk0EBmpOh-Dq6JFkXFoooj5Bpo",
                    "width": 900
                }
            ],
            "place_id": "ChIJE6GwhHz2aS4RvQXVvfG8Nr4",
            "plus_code": {
                "compound_code": "RRH5+67 Cideng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRH5+67"
            },
            "rating": 4,
            "reference": "ChIJE6GwhHz2aS4RvQXVvfG8Nr4",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 804
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Cikini Raya No.75, Cikini, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1917227,
                    "lng": 106.8387042
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.190383270107278,
                        "lng": 106.8399876298927
                    },
                    "southwest": {
                        "lat": -6.193082929892721,
                        "lng": 106.8372879701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Ibis Budget Jakarta Cikini",
            "photos": [
                {
                    "height": 768,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103367149196379569630\">ibis budget Jakarta Cikini</a>"
                    ],
                    "photo_reference": "AciIO2fVBvf1UQrEoYQoJUm8SBedvpDqsaR6vuFSqdvpY_i31Ad1VnLuS2b6-DEf82Wn8h5Z_amdfJ66IEqY19ycSZl0l_iBFGff1IlWK247NKTAQE2lZQVGqj6HNl4Ft7rtt4PFK9e-udUglTMt38wy1WZS3jFLQu_aH9vcz66AbfHQtCum_HIiL0qL8QGTFj78X6V71fWXW3SF3d3L5JesjfXuU3Bke74d7VRtxauXp3uFeI0wjGj35GIb0cQD1L-tdMdCSj9nxiALsVIhFn_PdHB316Z6SyX5aIlucue08YV2vv9h4dE",
                    "width": 1024
                }
            ],
            "place_id": "ChIJQ-JVKj_0aS4RlXb6qD3x_ug",
            "plus_code": {
                "compound_code": "RR5Q+8F Cikini, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR5Q+8F"
            },
            "rating": 4.2,
            "reference": "ChIJQ-JVKj_0aS4RlXb6qD3x_ug",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 4391
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. R. E. Martadinata No.12M, Ancol, Kec. Pademangan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.131253999999999,
                    "lng": 106.8277618
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.129821420107278,
                        "lng": 106.8290613798927
                    },
                    "southwest": {
                        "lat": -6.132521079892721,
                        "lng": 106.8263617201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Sans Hotel Liv Ancol",
            "photos": [
                {
                    "height": 2000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100598712428111234787\">Sans Hotel Liv Ancol</a>"
                    ],
                    "photo_reference": "AciIO2fM_KtOyZOS3RjaVsk88naTWuZSa6kKX6ULmPZ2EN-TNF-ROcCa7ByYeZG6FFazYpLBR-witCfbLoBehI5VaBFWsq1fue9wIKhV5FqcSG6kkBkI7LUKiRV1C2wZiLkYdpAgNTkZYg7ElZsbjriaCDCKT1ZjejfYCuwibDX7gbjSmf_55GB-zIwsB0mNuOD7jOsreilA45OlHAjau7hp2QJkLc6Dr8jktcaO798xhGW1jova-Ji6ZeIMH8nCFN9py_tjdCdfi8uYjXzNvcAA2WZPEO8UCtJjwg1hYCn9WT-D7vQnHTQ",
                    "width": 3000
                }
            ],
            "place_id": "ChIJNSJAp-Ufai4RlQLS42xO-bs",
            "plus_code": {
                "compound_code": "VR9H+F4 Ancol, Jkt Utara, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58VR9H+F4"
            },
            "rating": 4.2,
            "reference": "ChIJNSJAp-Ufai4RlQLS42xO-bs",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 438
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Komplek, Ps. Senen, Jl. Pasar Senen No.3 Blok 3, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1758516,
                    "lng": 106.8420367
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.171005100000001,
                        "lng": 106.8439329298927
                    },
                    "southwest": {
                        "lat": -6.1780727,
                        "lng": 106.8412332701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Hi Hotel",
            "photos": [
                {
                    "height": 2250,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107193972663748916017\">CBAC COACH</a>"
                    ],
                    "photo_reference": "AciIO2dBllAHW_aqul5mejJks9UeAh2Jo8dbEI0qWOuyeeK0f6HJyyrDg4aP4a1xArSHpD16UAVMx5bL0ImzkplFRbRbXgqyQhRU8jynVUIt7PtBAoiqlILJPWUiRXMwLuzG4IYgEd_n7lBxXTc-89CS80INRZjxev90mhLGq5I5ixCxkNGqLgLF9gXtS4pVHjEU6JASUU9sPfVYfTJcW4EiEdwgNedy3AyH77Fh--qMZAlmp0R1_QF1InVA0HpVzsMUO9dOsCD1rMdl29DwYjguzcU4-zpRJlYxHNHvG-t0JfLOFZ1-2bW340mdZv1TP6K2-9mMwQkYnyQ_LTgcbXRFzX_wcOZH-kmBgaV17AL31BFTLtaJMtBEFfdFTmK2wAGZ8qAMyA_Iz6tBP8PiYmyrRFHX8iJwnep-F5PuI80oYXxm-xxxSIIMhgpz_O9CYmC3cZ7JbEWwQBWMoaq1SJspSnBYSIxEbSFbTaK8sIgQCdogpQo_shb_dtKzFhVvWSYS-X3gHUEqCbulGU0K1276C3PzSEowMYvvZcO2_iF2eIQDFE8IJxG8Egr-_-pbQ3K0L00OWgZz",
                    "width": 4000
                }
            ],
            "place_id": "ChIJZU1gfrL1aS4Rkt2kp63D5JE",
            "plus_code": {
                "compound_code": "RRFR+MR Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRFR+MR"
            },
            "rating": 4.5,
            "reference": "ChIJZU1gfrL1aS4Rkt2kp63D5JE",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 1716
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Garuda No.67 1, Gn. Sahari Sel., Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10620, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.1614777,
                    "lng": 106.8450923
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.160218420107277,
                        "lng": 106.8464709298927
                    },
                    "southwest": {
                        "lat": -6.162918079892721,
                        "lng": 106.8437712701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "Grand G7 Hotel Kemayoran",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102345650940415529538\">GrandG7 Hotel</a>"
                    ],
                    "photo_reference": "AciIO2f-GoR_h1E8LXG8RRpnBrBoQXH9DPTteHhiiB4UAj0pMc3H7kpInRqNwXcqUiOIIZTTIXxuAP8bnpuW7g4TfztUjfPhQsEWiPpUMxeDy_bJ_qbB6IATfEtLD6EBFKvXI3ZHhtMHd9kHp-3XZAH8S3yoTLxEgc6qA7Cy30eXDfVmbUuDgsJnutY1rTraqjMS1tEZWDDmnY1smPmLaKx6VLOUY1LTrmR8etpBpB-6n3kFwDmWHs3gEqoMImUQWdrMr70PQtaFU3JqUvh2dMHlGyJlegL0rBD2-L3t7KWsnpvevC_d74s",
                    "width": 1249
                }
            ],
            "place_id": "ChIJ8y9OIrn1aS4R1WMyGgV0AF0",
            "plus_code": {
                "compound_code": "RRQW+C2 Gn. Sahari Sel., Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRQW+C2"
            },
            "rating": 4.4,
            "reference": "ChIJ8y9OIrn1aS4R1WMyGgV0AF0",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 1951
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Mangga Besar 6 Utara No. 7B, RT.1/RW.1, Taman Sari, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11150, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.150078199999999,
                    "lng": 106.8247297
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.148736220107279,
                        "lng": 106.8260191798927
                    },
                    "southwest": {
                        "lat": -6.151435879892722,
                        "lng": 106.8233195201073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "City Style Residence",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1152,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110390645011343802594\">AGALIVIR Asotnes</a>"
                    ],
                    "photo_reference": "AciIO2fPqzgsFkJG7Wy6YYayN5fxGprzcSdWz_IcEzEIzdeAGgmNrQxD6kE5RdqRqOZGnDzP5p2cAiHL9CFcaAwUbWoaXWEkTrUmh0e5sTcJchOT3YUmVCKCcsQL-b5ZjO2D5PSjf4XcQdaaA-SnW5kCWr-mz_Q8epCSaA0kda4Edotf-N70LCLMvzn-PS2CFERgG6yVm1kQ8_eL60BbP6oslSbbZrlzFRRnFWl6OV7U4t9EoJTbSydLGseTdY-UmmGQIVhsMYBAS2EgSdJ6LyM09EOAzwbd7ZGeEXoCISMzVo71LyoVVDae-WQUf8pXOJxzOE1KvBFGQrYb7WnV86P7b418mlnNRsFUZq5fuRwnXp9Mfycbl6oCc2Qmyhv3LTORsuql8A8yiwjIwgL_J6xbQN3Zik8BkulllB3Miun9ybT7WTkJk8-W8R3K8g-yQ29UkKzxFVqUgvWZ2FJwM6DFZbrt8-FnkQXmpeZDM1J6WN1rOHcWcbu_i2xGUUaxgJsnNNDMri4WW0JT-EzsItFIiDfZSLqnJaEaah96cI8xqAxj5sygRz-6Ml00TK371il3JUTsumD2",
                    "width": 2048
                }
            ],
            "place_id": "ChIJb-gFEeT1aS4R3p9Tyr_-1Ng",
            "plus_code": {
                "compound_code": "RRXF+XV Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RRXF+XV"
            },
            "rating": 4.1,
            "reference": "ChIJb-gFEeT1aS4R3p9Tyr_-1Ng",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 262
        },
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "Jl. Taman Kebon Sirih 1 No.3 4, RT.10/RW.10, Kampung Bali, Tanah Abang, Central Jakarta City, Jakarta 10250, Indonesia",
            "geometry": {
                "location": {
                    "lat": -6.183425,
                    "lng": 106.820729
                },
                "viewport": {
                    "northeast": {
                        "lat": -6.182042220107278,
                        "lng": 106.8221196298927
                    },
                    "southwest": {
                        "lat": -6.184741879892722,
                        "lng": 106.8194199701073
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            "icon_background_color": "#909CE1",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
            "name": "1O1 URBAN Jakarta Thamrin",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2296,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115442034971845651984\">1O1 URBAN Jakarta Thamrin</a>"
                    ],
                    "photo_reference": "AciIO2d4-h9OHFHiCbA6kb-8jrJBrEy_HR4v63YEKqaNnKtgwohAqMOxRv6_dxxr-S206YAf3WG40GIxPox2ny6-Pz-cklrZ-7_mH6o0PNg7jERY7ur8O1VI7aZs-_Xb9HKbwNqX42v_IjheyDgpnbHAZjKLFOpjZMa5tvswZFlXVa6eGuvCU2u_DpC9qexEPInUnpSG-SSYFMdJykKIM4V-9yHMyy9VDdu-g2DQVyVeFkPDnXlexHB0n0fPO00Jwd_PmDKhZSnt0oR4_yS8PiZazce6zQG0Ysc8OgyYItc8FXxsiC22BIA",
                    "width": 4080
                }
            ],
            "place_id": "ChIJM8KQpyn0aS4RicTR2IZaZcI",
            "plus_code": {
                "compound_code": "RR8C+J7 Kp. Bali, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                "global_code": "6P58RR8C+J7"
            },
            "rating": 4.5,
            "reference": "ChIJM8KQpyn0aS4RicTR2IZaZcI",
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 8763
        }
    ],
    "embedUrl": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCyxPBuaJkYeHoV8YBWfg7B3miVkzMJfQI&q=place_id:ChIJSyoA-Ej0aS4RgEHn5VIq4rU&zoom=15",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Rivoli%20Jakarta&query_place_id=ChIJSyoA-Ej0aS4RgEHn5VIq4rU",
    "status": "OK"
}
```
