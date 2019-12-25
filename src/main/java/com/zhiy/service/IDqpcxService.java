package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Dqpcx;
public interface IDqpcxService {
    //不同省份的学校
    ServerResponse<PageInfo> getDqpcxListzsd(int pageNum, int pageSize,String zsd);
    ServerResponse<PageInfo> getDqpcxListkezsd(int pageNum, int pageSize,String zsd,String kelei,String pcmc);
}
