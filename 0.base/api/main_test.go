package main

import (
	"fmt"
	"os"
	"testing"

	"github.com/google/uuid"
)

func TestUUID(t *testing.T) {
	dir := "D:\\xw-data\\背景图\\poi系统素材"
	f, _ := os.ReadDir(dir)
	for _, file := range f {
		if file.IsDir() {
			continue
		}
		cur := "./" + uuid.NewString()
		_ = os.Mkdir(cur, os.ModeDir)

		content, _ := os.ReadFile(dir + "\\" + file.Name())
		_ = os.WriteFile(cur+"/"+file.Name(), content, os.ModeAppend)
		fmt.Println(cur + "/" + file.Name())
	}
}

// INSERT INTO "public"."cps_system_material" ("id","hierarchy", "name", "material_id", "cover_path","file_info_path","file_size","file_suffix", "status","file_path", "file_type", "program", "scene", "shelf_status","create_user","create_time","update_user","update_time")
// VALUES
// ('25a6cc1a-7ea7-49f0-a3f6-6481eb0816b4',1,'img_arrows1',777666555444333223,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/25a6cc1a-7ea7-49f0-a3f6-6481eb0816b4/img_arrows1.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('97588b22-2b7f-43fa-853b-2c0258a9da1a',1,'img_arrows2',777666555444333231,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/97588b22-2b7f-43fa-853b-2c0258a9da1a/img_arrows2.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('5b9f8d09-ad5e-46cd-952e-c1d4fb79309e',1,'img_arrows3',777666555444333232,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/5b9f8d09-ad5e-46cd-952e-c1d4fb79309e/img_arrows3.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('21d0458f-2bbd-4be0-989f-290fd46afaee',1,'img_arrows4',777666555444333233,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/21d0458f-2bbd-4be0-989f-290fd46afaee/img_arrows4.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('dad2bd8a-f9cb-44cd-b0fe-289fb0c0d0ba',1,'img_arrows5',777666555444333234,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/dad2bd8a-f9cb-44cd-b0fe-289fb0c0d0ba/img_arrows5.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('2328b87b-e889-41eb-926c-20e2d9bba34e',1,'img_arrows6',777666555444333235,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/2328b87b-e889-41eb-926c-20e2d9bba34e/img_arrows6.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('5e855fda-55bf-4f69-b793-5049ef0f7f32',1,'img_arrows7',777666555444333236,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/5e855fda-55bf-4f69-b793-5049ef0f7f32/img_arrows7.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('6f713548-523d-474c-a022-7ca9a1c0e4b2',1,'img_arrows8',777666555444333237,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/6f713548-523d-474c-a022-7ca9a1c0e4b2/img_arrows8.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('d182e166-b44f-48ae-b531-298256c63de7',1,'img_arrows9',777666555444333238,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/d182e166-b44f-48ae-b531-298256c63de7/img_arrows9.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('572564c5-8461-46fb-b340-58ace7496ee6',1,'img_arrows10',777666555444333224,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/572564c5-8461-46fb-b340-58ace7496ee6/img_arrows10.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('a16420a0-f766-4e30-b751-d97ddd0f74a7',1,'img_arrows11',777666555444333225,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/a16420a0-f766-4e30-b751-d97ddd0f74a7/img_arrows11.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('9bd25320-7df5-4a07-95ec-5d01b12306c1',1,'img_arrows12',777666555444333226,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/9bd25320-7df5-4a07-95ec-5d01b12306c1/img_arrows12.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('413913cc-d388-4157-b465-78c45a2d7c0c',1,'img_arrows13',777666555444333227,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/413913cc-d388-4157-b465-78c45a2d7c0c/img_arrows13.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('42711801-233e-4737-9ce8-40e8226d4ab7',1,'img_arrows14',777666555444333228,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/42711801-233e-4737-9ce8-40e8226d4ab7/img_arrows14.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('1deba363-d708-410e-b65b-94b859a07d06',1,'img_arrows15',777666555444333229,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/1deba363-d708-410e-b65b-94b859a07d06/img_arrows15.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('d25c7c5b-381f-41fb-9c01-e0467972accd',1,'img_arrows16',777666555444333230,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/d25c7c5b-381f-41fb-9c01-e0467972accd/img_arrows16.png','FILE', 'SOON_MANAGER','MANAGER_TOPOLOGY_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('1f8e5235-fddb-4dc4-9e06-b9bec0908f2e',1,'红色背景框',777666555444333239,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/1f8e5235-fddb-4dc4-9e06-b9bec0908f2e/红色背景框.png','FILE', 'SOON_MANAGER','MANAGER_POI_BACKGROUND_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('cf8adffe-54c0-4095-b347-960164eaee3b',1,'蓝色背景框',777666555444333240,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/cf8adffe-54c0-4095-b347-960164eaee3b/蓝色背景框.png','FILE', 'SOON_MANAGER','MANAGER_POI_BACKGROUND_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00'),
// ('8657f9ec-3457-41ce-9db5-c1e1c7c0ad47',1,'黄色背景框',777666555444333241,'', '', 1000, 'png', 'ACTIVITY',  'operation_manager/material/8657f9ec-3457-41ce-9db5-c1e1c7c0ad47/黄色背景框.png','FILE', 'SOON_MANAGER','MANAGER_POI_BACKGROUND_IMG', 'ON_SHELF','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00','3ab097ca-136d-4cca-8d60-97e248f4766c','2023-08-11 07:53:19.241+00');
