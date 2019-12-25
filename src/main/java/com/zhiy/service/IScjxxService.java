package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;

public interface IScjxxService {

    ServerResponse<String> shoucangxx(String username, String gxmc, String kb, String pc);

    ServerResponse<String> cherckxx(String username, String gxmc);

    ServerResponse<PageInfo> getshoucangxxlist(int pageNum, int pageSize, String username);
}
