package com.zhiy.service;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Gxxxb;
public interface IGxxxbService {
    //查找高校统一代码
    ServerResponse<Gxxxb> selectgxtydm(String Gxxm);
    //展示全部高校
    ServerResponse<PageInfo> getGxxxbList(int pageNum, int pageSize);
    //点击不同类别，显示不同学校
    ServerResponse<PageInfo> getGxxxbListclass(int pageNum, int pageSize,String leibie);
//不同省份的学校
    ServerResponse<PageInfo> getGxxxbListzsd(int pageNum, int pageSize,String zsd);
    ServerResponse<PageInfo> getSchoolclass(int pageNum, int pageSize,String ts);
    ServerResponse<PageInfo> getSchoolclassjiu(int pageNum, int pageSize);
    ServerResponse<PageInfo> getSchoolclasser(int pageNum, int pageSize);
}
