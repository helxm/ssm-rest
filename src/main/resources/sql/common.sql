CREATE TABLE `xxxxx` (
  `isDelated` CHAR(1) DEFAULT NULL COMMENT '假删除',
  `createName` VARCHAR(100) DEFAULT NULL COMMENT '创建人',
  `createTime` TIMESTAMP NULL DEFAULT NULL COMMENT '创建时间',

  `updateTime` TIMESTAMP NULL DEFAULT NULL,
  `updateName` VARCHAR(100) DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8


ALTER TABLE `pugilistadmin_test`.`xxxxxx` 
  ADD COLUMN `isDelated` CHAR NULL ,
  ADD COLUMN `createName` VARCHAR (32) NULL ,
  ADD COLUMN `createTime` TIMESTAMP NULL ,
  ADD COLUMN `updateName` VARCHAR (32) NULL ,
  ADD COLUMN `updateTime` TIMESTAMP NULL ;