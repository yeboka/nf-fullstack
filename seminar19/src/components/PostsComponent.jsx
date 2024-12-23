import React from 'react';
import useFetch from '../hooks/useFetch';

/*

Разработайте компонент PostsComponent, используя кастомный хук useFetch для выполнения асинхронного запроса к API и управления состоянием загрузки.

Основные шаги:

1) Используйте кастомный хук useFetch для загрузки данных о постах с 'https://jsonplaceholder.typicode.com/posts'. Хук должен предоставлять данные о постах, состояние загрузки, сообщение об ошибке и функцию для повторной загрузки данных.
2) Отобразите заголовок "Posts".
3) Пока данные загружаются, отображайте сообщение "Loading...".
4) В случае ошибки при загрузке данных покажите соответствующее сообщение.
5) Реализуйте кнопку, которая позволяет повторно загрузить данные о постах (используйте функцию refetch из useFetch).
6) После загрузки и в случае отсутствия ошибок отобразите список постов. Для каждого поста отобразите его заголовок и текст в элементе списка (<li>).

Цель задания: Улучшить навыки работы с пользовательскими хуками, асинхронными запросами и управлением состоянием в React.


*/

function PostsComponent() {

    return (
        <div>
            <h1>Posts</h1>
            
        </div>
    );
}

export default PostsComponent;
