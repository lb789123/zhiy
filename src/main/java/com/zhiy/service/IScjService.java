package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Scj;

public interface IScjService {
    //用户将专业收藏
    ServerResponse<String> shoucangzy(Scj scj);
    ServerResponse<String> shoucangxx(String username, String gxmc,String kb, String pc);
    ServerResponse<String> cherckxx(String username, String gxmc);
    //用户将专业收藏
    ServerResponse<PageInfo> getshoucanglist(int pageNum, int pageSize,String username);
    ServerResponse<PageInfo> getshoucangxxlist(int pageNum, int pageSize,String username);
    ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc);
    public ServerResponse<Integer> getCartProductCount(String username);

    ServerResponse<PageInfo> getscjbiaozhu(int pageNum, int pageSize, String username);
}
