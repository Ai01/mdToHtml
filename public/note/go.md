# go笔记

## 变量

### 变量的声明

* 其中“类型”和“=表达式”可以省略其中一个。省略"类型"会根据表达式自动推导。省略“=表达式”会初始化为零值

```javascript
	var a = 1;
```

```go
	var 变量名 类型 = 表达式

	// 基本使用
	var name string = "baihaihui"
	var name2 string
	var name3 = "baihaihui"

	// 同时声明多个
	var i, j int
	var i, j, k = 1, 2, 3
```

### 简短变量声明

> 类型自动推导, 同时完成声明和赋值

```go
	名字 ：= 表达式

	name := "baihaihui"
	i, j := "baihaihui", 2

	// 简短变量声明中必须要有新的变量
	f, err := os.Open(inFile)

	f, err := os.Create(outFile) // compile error
```

### new函数

> 另一个创建变量的方法是调用用内建的new函数。表达式new(T)将创建一个T类型的匿名变量，初始化为T类型的零值，然后返回变量地址，返回的指针类型为*T

```go
	p := new(int) // p *int类型
	fmt.Println(*p) // 0
```

### 变量的生命周期
> 变量的生命周期指的是在程序运行期间变量有效存在的时间间隔。对于在包一级声明的变量来说，它们的生命周期和整个程序的运行周期是一致的。
> 而相比之下，在局部变量的声明周期则是动态的：从每次创建一个新变量的声明语句开始，直到该变量不再被引用为止，然后变量的存储空间可能被回收。
> 函数的参数变量和返回值变量都是局部变量。它们在函数每次被调用的时候创建。






## 指针

* 一个指针的值是另一个变量的地址。一个指针对应变量在内存中的存储位置。

* 如果用“var x int”声明语句声明一个x变量，那么&x表达式（取x变量的内存地址）将产生一个指向该整数变量的指针,指针对应的数据类型是*int,
* *p表达式对应p指针指向的变量的值。

* 任何类型的指针的零值都是nil

```go
	x := 1
	p := &x	// type *int
	fmt.Println(*p) // 1
```





## 赋值

### 隐式赋值
```go
	modules := []string{"gold","sliver","bronze"}
```
### 可赋值性
* 不管是隐式还是显式地赋值，在赋值语句左边的变量和右边最终的求到的值必须有相同的数据类型。更直白地说，只有右边的值对于左边的变量是可赋值的，赋值语句才是允许的。






## 类型

### 类型的用处
* 变量或表达式的类型定义了对应存储值的属性特征，例如数值在内存的存储大小（或者是元素的bit个数），它们在内部是如何表达的，是否支持一些操作符，以及它们自己关联的方法集等。
```go
	type 类型名称 底层类型
```










## 包和文件

### 包的目的
* 模块化

* 每个包都对应一个独立的名字空间

* 包还可以让我们通过控制哪些名字是外部可见的来隐藏内部实现信息。在Go语言中，一个简单的规则是：如果一个名字是大写字母开头的，那么该名字是导出的（译注：因为汉字不区分大小写，因此汉字开头的名字是没有导出的）。

### 包的导入
```go
	import "packageName"
	import (
		"fmt"
		"os"
	)
```

### 包的初始化
> 不懂？需要继续看






## 作用域

* 声明语句的作用域是指源代码中可以有效使用这个名字的范围。

* 语法块是由花括弧所包含的一系列语句，就像函数体或循环体花括弧对应的语法块那样。语法块内部声明的名字是无法被外部语法块访问的。

* 任何在在函数外部（也就是包级语法域）声明的名字可以在同一个包的任何源文件中访问的。

* 在包级别，声明的顺序并不会影响作用域范围，因此一个先声明的可以引用它自身或者是引用后面的一个声明



## 布尔型

* 布尔值并不会隐式转换为数字值0或1，反之亦然。必须使用一个显式的if语句辅助转换：
```go
	i := 0
	if b {
   	 i = 1
	}
```


## 字符串

```go
	s := "hello world"
	fmt.Println(s[1:5])
```

### 原生字符串

> 一个原生的字符串面值形式是...。使用反引号代替双引号。在原生的字符串面值中，没有转义操作；全部的内容都是字面的意思，包含退格和换行，因此一个程序中的原生字符串面值可能跨越多行

```go
	a := `tst 
		fuckyu a v
	`
	fmt.Println(a)
```

### bytes、strings、strconv、unicode包

> 需要在使用中了解


## 常量

### 常量的声明和赋值

```go
	const pi = 3.14159

	// 常量的声明也可以带上类型
	const noDelay time.Duration = 0

	const (
		e = 2.7
		pi = 3.14
	)

	const (
		a = 1
		b 
		c = 2
		d
	)  // a=b=1,c=d=2

	// iota常量生成器初始化
	type Weekday int
	const (
		Sunday Weekday = iota // 0
		Monday // 1
		Tuesday // 2
		Wednesday // 3
		Thursday // 4
		Friday // 5
		Saturday // 6
	)

```

### 无类型常量

> 还不懂




## 数组

> 数组是一个由固定长度的特定类型元素组成的序列，一个数组可以由零个或多个元素组成。因为数组的长度是固定的，因此在Go语言中很少直接使用数组

```go
	var a [3]int
	for i, v := range a{
		fmt.Printf("%d %d\n",i,v)
	}
	// 0 0
	// 1 0
	// 2 0

	// 赋值
	var b [3]int
	b = [3]int{1, 2, 3}

	var q [3]int = [3]int{1, 2, 3}

	// ...表示长度根据具体赋值来算
	p := [...]int{1, 2, 3}
```

## slice

> Slice（切片）代表变长的序列，序列中每个元素都有相同的类型。一个slice类型一般写作[]T，其中T代表slice中元素的类型；slice的语法和数组很像，只是没有固定长度而已

* slice并没有指明序列的长度。这会隐式地创建一个合适大小的数组，然后slice的指针指向底层的数组

* 一个零值的slice等于nil

```go
	s := []int{1, 2, 3, 4, 5}	
	fmt.Println(s[2:]) // [3 4 5]
```

### append

> append函数的原理不理解
```go
	s := []int{1,2}
	s = append(s,3)
	fmt.Println(s)
```

## map
> 在Go语言中，一个map就是一个哈希表的引用

* map中所有的key都有相同的类型，所以的value也有着相同的类型，但是key和value之间可以是不同的数据类型

* K对应的key必须是支持==比较运算符的数据类型，所以map可以通过测试key是否相等来判断是否已经存在

* map类型的零值是nil

```go
	ages := make(map[string]int)
	ages["alice"] = 31
	ages["peter"] = 20

	ages2 := map[string]int{
		"alice": 31,
		"peter": 20,
	}

	// 遍历
	for name, age := range ages {
		fmt.Printf("%s\t%d\n",name,age)
	}

	// 删除
	delete(ages, "alices")
```

## 结构体

> 结构体是一种聚合的数据类型，是由零个或多个任意类型的值聚合成的实体

> 结构体成员的输入顺序也有重要的意义。我们也可以将Position成员合并（因为也是字符串类型），或者是交换Name和Address出现的先后顺序，那样的话就是定义了不同的结构体类型。

> 一个命名为S的结构体类型将不能再包含S类型的成员：因为一个聚合的值不能包含它自身。（该限制同样适应于数组。）但是S类型的结构体可以包含*S指针类型的成员

> 如果结构体的全部成员都是可以比较的，那么结构体也是可以比较的，那样的话两个结构体将可以使用==或!=运算符进行比较。相等比较运算符==将比较两个结构体的每个成员

```go
	type Employee struct {
		ID int
		Name string
		Address string
		DoB time.Time
		Position string
		Salary int
		ManagerID int
	}
	var dilbert Employee


	// 两种方法不能同时使用
	// 按顺序赋值,不可用在外部包中使用按顺序赋值的方法
	type Point struct { X, Y int}
	p := Point{1, 2}

	// 按名称赋值
	q := Point{X:1, Y:2}
```

### 结构体匿名成员
```go
	// 常规的复用struct方法
	type Point struct {
		X, Y int
	}

	type Circle struct {
		Center Point
		Radius int
	}

	type Wheel struct {
		Circle circle
		Spokes int
	}

	var w Wheel
	w.Circle.Center.X = 8
	w.Circle.Center.Y = 8
	w.Circle.Radius = 5
	w.Spokes = 20


	// 匿名嵌入
	type Circle struct {
		Point
		Radius int
	}

	type Wheel struct {
		Circle
		Spokes int
	}

	// 赋值的第一种方法
	var w Wheel
	w.X = 8
	w.Y = 8
	w.Radius = 5
	w.Spokes = 20
	// 赋值的第二种方法
	w = Wheel{Circle{Point{8,8}, 5}, 20}
	w = Wheel{
		Circle: Circle{
			Point: Point{X:8, Y:8}
			Radius: 5,
		}
		Spokes: 20,
	}
```



## 函数

> 每一次函数调用都必须按照声明顺序为所有参数提供实参（参数值）。在函数调用时，Go语言没有默认参数值，也没有任何方法可以通过参数名指定形参，因此形参和返回值的变量名对于函数调用者而言没有意义

### 函数声明

```go
	func name(parameter-list) (result-list) {
		body
	}
	func hypot(x, y float64) float64{
		return math.Sqrt(x*x, y*y)
	}

	func f(i, j, k int, s, t, string)

	// - 符号可以强调某一个参数未被使用
	func first(x int, _ int) int {
		return x
	}

	// 没有函数体的函数声明，这表示该函数不是以Go实现的
	func Sin(x float64) float
```

### 多返回值

> 在Go中，一个函数可以返回多个值

```go
	func test (url string) ([]string, error){
		...
		return visit(nil, doc), nil 
	}
```

### 递归

> 不懂，需要继续看


### 匿名函数

```go
	strings.Map(func(r rune) rune { return r + 1}, "HAL-9000")

	func squares() func() int {
		var x int
		return func() int {
			x++
			return x*x
		}
	}
```

### 可变参数

> 在声明可变参数函数时，需要在参数列表的最后一个参数类型之前加上省略符号“...”，这表示该函数会接收任意数量的该类型参数

```go
	// 在函数体中,vals被看作是类型为[] int的切片
	func sum(vals...int) int {
		total := 0
		for _, val := range vals {
			total += val
		}
		return total
	}
```

### deferred函数
> 延迟函数

> 不懂

### panic异常
> panic 是用来表示非常严重的不可恢复的错误的。在Go语言中这是一个内置函数，接收一个interface{}类型的值（也就是任何值了）作为参数。panic的作用就像我们平常接触的异常。不过Go可没有try…catch，所以，panic一般会导致程序挂掉（除非recover）。所以，Go语言中的异常，那真的是异常了。你可以试试，调用panic看看，程序立马挂掉，然后Go运行时会打印出调用栈。但是，关键的一点是，即使函数执行的时候panic了，函数不往下走了，运行时并不是立刻向上传递panic，而是到defer那，等defer的东西都跑完了，panic再向上传递。所以这时候 defer 有点类似 try-catch-finally 中的 finally。panic就是这么简单。抛出个真正意义上的异常。

### recover
> 上面说到，panic的函数并不会立刻返回，而是先defer，再返回。这时候（defer的时候），如果有办法将panic捕获到，并阻止panic传递，那就异常的处理机制就完善了。Go语言提供了recover内置函数，前面提到，一旦panic，逻辑就会走到defer那，那我们就在defer那等着，调用recover函数将会捕获到当前的panic（如果有的话），被捕获到的panic就不会向上传递了，于是，世界恢复了和平。你可以干你想干的事情了。不过要注意的是，recover之后，逻辑并不会恢复到panic那个点去，函数还是会在defer之后返回。

> 不懂
