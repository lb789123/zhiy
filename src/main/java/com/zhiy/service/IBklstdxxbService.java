package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;
public interface IBklstdxxbService {
    //不同省份的不同学校的分数线
    ServerResponse<PageInfo> getBklstdxxbList(int pageNum, int pageSize,String zssf,String gxxm,String zskl,String zspc);
    //ServerResponse<PageInfo> getBklstdxxbListwkl(int pageNum, int pageSize,String zssf,String gxxm,String zspc);
    ServerResponse<PageInfo> chaxun(int pageNum, int pageSize,String skx,String ksfs,String zssf,String zskl,String zspc);
    ServerResponse<PageInfo> chaxunschool(int pageNum, int pageSize,String skx,String ksfs,String zssf,String zskl,String zspc);

}
