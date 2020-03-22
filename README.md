# algorithms4-typescript

本项目搜集《算法（第四版）》书中出现的算法，并使用 typescript 实现。

[![](https://img9.doubanio.com/view/subject/s/public/s28322244.jpg)](https://book.douban.com/subject/19952400/)

>本项目使用 deno 运行，请先参考 [deno_install](https://github.com/denoland/deno_install) 进行安装

## 运行

```bash
$ deno <location_to_file>

# 例如
# 运行本地文件
$ deno src/example/add_main.ts
# 运行在线文件
$ deno https://raw.githubusercontent.com/whinc/algorithms4-typescript/master/src/example/add_main.ts
```

## 测试

```bash
$ deno test <location_to_file>

# 例如
# 测试本地文件
$ deno test src/example/add_test.ts
# 测试在线文件
deno test https://raw.githubusercontent.com/whinc/algorithms4-typescript/master/src/example/add_test.ts
```