# D-JSTools

Every day is a good day
:smile:
:smile:
:smile:

----

## What's this ?

Some useful tools for JavaScript.

> List of tools available at now:

<table>
    </tr>
        <td >Tool</td>
        <td>Intro</td>
    </tr>
    <tr>
        <td>DLog(content,tag,type)</td>
        <td>The logger with time and tag</td>
    </tr>
</table>

----

## How to use it ?

> for example:

``` js
import {Dlog} from 'd-jstools'

let tag = "Test-----"
let content = "hello world"

console.log(content,tag)
```

![](./img/img1.png 'DLog例子')

----

## Api
 
> The param for tools, see below:

<table>
    </tr>
        <td >Func</td>
        <td>Param</td>
        <td>value</td>
        <td>Intro</td>
    </tr>
    <tr>
        <th rowspan="3">DLog(content,tag,type)</th>
        <td>content</td>
        <td>String</td>
        <td>the log content</td>
    </tr>
    <tr>
        <td>tag</td>
        <td>String</td>
        <td>the log tag</td>
    </tr>
    <tr>
        <td>type</td>
        <td>log,info,error,warn</td>
        <td>the log type,see the value</td>
    </tr>    
</table>