
它们都是编码URL，唯一区别就是编码的字符范围:

- encodeURI方法不会对下列字符编码  `ASCII字母、数字、~!@#$&*()=:/,;?+'`
- encodeURIComponent方法不会对下列字符编码 `ASCII字母、数字、~!*()'`

所以encodeURIComponent比encodeURI编码的范围更大。
实际例子来说，encodeURIComponent会把 http://  编码成  http%3A%2F%2F 而encodeURI却不会。


#### escape
简单来说，escape是对字符串(string)进行编码(而另外两种是对URL)，作用是让它们在所有电脑上可读。
编码之后的效果是%XX或者%uXXXX这种形式。
其中 `ASCII字母、数字、@*/+` ，这几个字符不会被编码，其余的都会。