/*
 * This file is part of VoKadio extension for Google Chrome browser
 *
 * Copyright (c) 2007 - 2011 InfoStyle Company (http://infostyle.com.ua/)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var regexp_specials = new RegExp('[.*+?|()\\[\\]{}\\\\]', 'g');

function regExpEscape(str)
{
    return (str != undefined) ? str.toString().replace(regexp_specials, '\\$&') : undefined;
}

function buildUri(uri, params)
{
    var params_list = [];

    for (var key in params)
        params_list.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));

    return uri + '?' + params_list.join('&');
}
