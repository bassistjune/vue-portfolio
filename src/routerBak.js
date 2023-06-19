import { createWebHistory, createRouter } from "vue-router";

import BasicLayer from "@/layout/Basic.vue"
import Main from "@/views/Home/index.vue"
import Introduce from "@/views/Introduce/index"
import Portfolio from "@/views/Portfolio/index"
import Notes from "@/views/Notes/index"
import Targets from "@/views/Target/index"
import Personal from "@/views/Personal"
import PersonalList from "@/views/Personal/List"
import PersonalPhotos from "@/views/Personal/PhotoAlbum"

const routes = [
    {
        path: "/",
        component: BasicLayer,
        children: [
            {
                name: "메인",
                path: "/",
                component: Main
            },
            {
                name: "본인소개",
                path: "/",
                component: Introduce
            },
            {
                name: "포트폴리오",
                path: "/",
                component: Portfolio
            },
            {
                name: "작업연습장",
                path: "/",
                component: Notes
            },
            {
                name: "목표&지향",
                path: "/",
                component: Targets
            },
            {
                name: "개인적인것들",
                path: "/",
                component: Personal,
                children: [
                    {
                        name: "개인소개",
                        path: "/",
                        component: PersonalList,
                    },
                    {
                        name: "사진첩",
                        path: "/",
                        component: PersonalPhotos,
                    },
                ],
            },
        ]
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
