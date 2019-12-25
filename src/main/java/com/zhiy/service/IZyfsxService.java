package com.zhiy.service;
import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;
public interface IZyfsxService {
    //获得指定生源地省份的不同学校的专业
    ServerResponse<PageInfo> getzyList(int pageNum, int pageSize,String ksdq,String gxmc,String kb,String pc);
    //获得各专业的分数线信息
    ServerResponse<PageInfo> getzyfsxList(int pageNum, int pageSize,String ksdq,String gxmc,String kb,String pc,String zymc);
}
