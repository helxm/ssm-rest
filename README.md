# 改进更新-he
1. 使用restcontroller
2. 增加mybatis generrator
3. 增加mybatis 分页插件PageHelper
4. 各层抽象公共父类 -- 未完
5. service层使用抽象父类 -- 未完

# 使用
1. eclipse的git导入
2. 转为maven项目
3. 配置project fact，转为web项目
4. 数据库初始化，/xst/src/main/resources/sql/schema_2016-8-15.sql
5. tomcat中启动运行

# 接口测试工具
建议：postman 


#优雅的SSM架构(Spring+SpringMVC+Mybatis）
- Maven
- Spring（IOC DI AOP 声明式事务处理）
- SpringMVC（支持Restful风格）
- Hibernate Validate（参数校验）
- Mybatis（最少配置方案）
- Quartz时间调度
- Redis缓存（ProtoStuff序列化）
- [Redis Sentinel主从高可用方案](http://wosyingjun.iteye.com/blog/2289593)
- [Redis Cluster集群高可用方案](http://wosyingjun.iteye.com/blog/2289220)
- [Druid（数据源配置 sql防注入 sql性能监控)](http://wosyingjun.iteye.com/blog/2306139)
- 统一的异常处理
- JSP JSTL JavaScript
- **Sping Shiro权限控制（待完善）**

###**架构图：**
![](http://i.imgur.com/EvH40td.png)