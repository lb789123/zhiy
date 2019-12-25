package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;

public interface IZybService {
    //通过用户名得到志愿表
    ServerResponse<PageInfo> zyb(int pageNum, int pageSize,String username);
    //用户添加志愿
    ServerResponse<String> shoucangzy(String username, String gxmc,String zymc, String kb, String pc);
    //用户删除专业
    ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc);
    //概率获取
    public int zhiyuan(String username);
}
